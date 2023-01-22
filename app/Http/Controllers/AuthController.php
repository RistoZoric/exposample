<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\SetupRequest;
use App\Http\Requests\UpdateSettingsRequest;
use App\Jobs\Mailchimp\AddListMember;
use App\Mail\ResetPassword;
use App\Mail\VerifyEmail;
use App\Models\Category;
use App\Models\User;
use App\Models\ReviewInvite;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use GuzzleHttp\Cookie\CookieJar;
use MailchimpTransactional\ApiClient;
use MailchimpTransactional\ApiException;
use App\Services\UserService;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    protected UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
        $this->pass_column = (config('config.domain_now') == 'creator' ? "password_creator" : "password");
        $this->user_type = (config('config.domain_now') == 'creator' ? "is_creator" : "is_reviewer");
    }

    public function showRegister() 
    {
        return Inertia::render('Register');
        // return view('auth.register');
    }
   
    public function showLogin()
    {
        return Inertia::render('Login');
        // return view('auth.login');
    }

  

    /**
     * @param RegisterRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function register(RegisterRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);
        $data['fingerprint'] = $request->fingerprint();
        $patreon_verified = 0;
        if(isset($data['patreon_verified']) && $data['patreon_verified'] == "true"){
            $patreon_verified = 1;
        };
        $inviter_username = null;
        if(Session::has('inviter_id')){
            $inviter_id = Session::get('inviter_id');
            if(!empty($inviter_id)){
                $creator = $this->userService->getCreatorByInviteId($inviter_id);
                if(!empty($creator)){
                    $inviter_username = $creator->username;  
                }
            }
        }

        //Validate...
        $userData = User::where(function($q) use ($request){
                        $q->where(['email' => $request->input('email')]);
                        $q->orWhere(['email' => $request->input('username')]);
                        $q->orWhere(['username' => $request->input('email')]);
                        $q->orWhere(['username' => $request->input('username')]);
                    })
                    ->first();

        if(!empty($userData) && $userData->{$this->user_type} == 1){
            if($userData->email == $request->input('email')){
                return redirect()->back()->withErrors(['email' => 'The email has already been taken.']); die;
            }else{
                return redirect()->back()->withErrors(['username' => 'The username has already been taken.']); die;
            }
        }

        if(!empty($userData)){
            $user = $userData;
        }else{
            $user = new User;
        }
        if(config('config.domain_now') == 'creator'){
            $data['type'] = "creator";
            $data['is_creator'] = 1;
            $data['password_creator'] = $data['password'];
            if(!empty($userData)){
                unset($data['password']);
            }
        }else{
            $data['is_reviewer'] = 1;
            if(!empty($userData) && $userData->is_creator == 1){
                $data['type'] = "creator";
            }
        }
        $user->fill($data);
        $user->patreon_verified = $patreon_verified;
        $user->save();
        Auth::login($user);

        //send email verification..
        if(empty($userData)){
            //generate token..
            $user->generateVerificationCode();
            //send mail..
            Mail::to($request->email)->send(new VerifyEmail([
                "user" => $user,
            ]));
        }

        //AddListMember::dispatch($request->email, ['creator']);
        if(!empty($inviter_username)){
            return redirect()->route('users.view', [$inviter_username]);  
        }else{
            Auth::logout();
            $request->session()->invalidate();
            return redirect()->route('pages.thank_you_page'); 
        }
    }

    //link from email..
    function verifyEmail($token){
        try {
            if($token != null){
                $user_obj = User::where('verification_code', '=', $token)->first();
                if(!empty($user_obj)){
                   
                    //update user email verify status...
                    $user_obj->verification_code = null;
                    $user_obj->email_verified_at = date('Y-m-d H:i:s');
                    $user_obj->save();

                    //redirct to login..
                    return redirect()->route('auth.sign-in');
                }else{
                    throw new Exception("Invalid token");
                }
            }
            //code...
        } catch (\Throwable $th) {
            abort(404);
        }
    }

    function updateUserType(Request $request, $type): RedirectResponse {
       
        if(in_array($type, ['creator', 'reviewer'])){
            //update user type..
            $request->user()->type = $type;
            $request->user()->save();

            //Send email...
            if($type == 'creator'){
                try {
                    $mailchimp = new ApiClient();
                    $mailchimp->setApiKey(config('mailchimp.mandrill_key'));
                    $mail = $mailchimp->messages->sendTemplate([
                        "template_name" => "new-signup-email",
                        "template_content" => [['name' => '', 'content' => '']],
                        "message" => [
                            'subject' => 'Welcome to Privy.reviews!',
                            'merge' => true, 
                            'global_merge_vars' => [
                                [
                                    'name' => 'FNAME',
                                    'content' => $request->user()->username
                                ],
                                [
                                    'name' => 'REVIEW_URL',
                                    'content' => route('users.view', [$request->user()->username])
                                ]
                            ],
                            'to' =>  [
                                [
                                    'email' => $request->user()->email,
                                    'name' => $request->user()->full_name
                                ]
                            ]
                        ],
                    ]);
                } catch (ApiException $exception) {}
            }

            $intendedUrl = match ($request->user()->type) {
                'creator' => route('creator_dashboard.index'),
                'reviewer' => route('categories.index'),
            };
        
            return redirect($intendedUrl);
        }

        return redirect()->route('pages.home');
    }
    
    /**
     * @param LoginRequest $request
     * @return RedirectResponse|JsonResponse
     */
    public function login(LoginRequest $request): RedirectResponse|JsonResponse
    {
        //Validate...
        $userData = User::where(function($q) use ($request){
            $q->where(['email' => $request->input('email')]);
            $q->orWhere(['username' => $request->input('email')]);
        })
        ->where($this->user_type, 1)
        ->first();

        if(empty($userData)){ 
           return redirect()->back()->withErrors(['email' => "The email or username does't exist" ]);
        }
        
        if (!empty($userData) && Hash::check( $request->input('password'), $userData->{$this->pass_column})) {

            Auth::login($userData);

            $request->session()->regenerate();

            /** Does not have a predefined destination */
            $intendedUrl = match ($userData->type) {
                'creator' => route('creator_dashboard.index'),
                'reviewer' => route('categories.index'),
            };
            

            /** Has a predefined destination */
            if ($request->filled('back')) {
                $intendedUrl = $request->back;
            }

            //checkuser comes from plans..
            if(request()->session()->has('redirect_plans') && request()->session()->get('redirect_plans') == '1'){
                $intendedUrl = route('checkout.my_plan');  
                request()->session()->forget('redirect_plans');
            }

            /** Redirect to review user if exists */
            if(Session::has('inviter_id') && !empty($request->user()->type)){
                $creator = $this->userService->getCreatorByInviteId(Session::get('inviter_id'));
                if(!empty($creator)){
                    $intendedUrl = route('users.view', [$creator->username]);
                }
            }
            
            return redirect($intendedUrl);
        }

        return redirect()->back()->withErrors(['password' => __('auth.password')]);
    }

    /**
     * @return RedirectResponse
     */
    public function facebookRedirect(): RedirectResponse
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * @return RedirectResponse
     */
    public function facebookCallback(): RedirectResponse
    {
        try {
            $facebookUser = Socialite::driver('facebook')->user();

            $user = User::where('fb_id', $facebookUser->id)->first();

            if (!$user) {
                //check if user exist with email..
                $userData = User::where(function($q) use ($facebookUser){
                    $q->where(['email' => $facebookUser->email]);
                    $q->orWhere(['username' => explode('@', $facebookUser->email)[0]]);
                })->first();

                if(!empty($userData)){
                    $user = $userData;
                }else{
                    $user = User::create([
                        'full_name' => $facebookUser->name,
                        'username' => explode('@', $facebookUser->email)[0],
                        'email' => $facebookUser->email,
                        'fb_id' => $facebookUser->id,
                        'password' => Hash::make(time()),
                        'email_verified_at' => date('Y-m-d H:i:s')
                    ]);
                }

                $user->addMediaFromUrl($facebookUser->avatar_original . '&access_token=' . $facebookUser->token)
                    ->toMediaCollection('avatars');
            }
        } catch (Exception $exception) {
            Log::error($exception->getMessage());
        }

        //set user type..
        if(config('config.domain_now') == 'creator'){
            $user->type = 'creator';
            $user->is_creator = 1;
            $user->save();
        }else{
            $user->is_reviewer = 1;
            if($user->is_creator == 1){
                $user->type = 'creator';
            }
            $user->save();
        }

        Auth::login($user);

        return redirect($this->getRedirectURL());
    }

    /**
     * @return RedirectResponse
     */
    public function googleRedirect(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * @return RedirectResponse
     */
    public function googleCallback(): RedirectResponse
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            $user = User::where('google_id', $googleUser->id)->first();

            if (!$user) {
                //check if user exist with email..
                $userData = User::where(function($q) use ($googleUser){
                    $q->where(['email' => $googleUser->email]);
                    $q->orWhere(['username' => explode('@', $googleUser->email)[0]]);
                })->first();

                if(!empty($userData)){
                    $user = $userData;
                }else{
                    $user = User::create([
                        'full_name' => $googleUser->name,
                        'username' => explode('@', $googleUser->email)[0],
                        'email' => $googleUser->email,
                        'google_id' => $googleUser->id,
                        'password' => Hash::make(time()),
                        'email_verified_at' => date('Y-m-d H:i:s')
                    ]);
                }

                $user->addMediaFromUrl($googleUser->getAvatar())
                    ->usingName(substr($googleUser->getAvatar(), 0, 255))
                    ->toMediaCollection('avatars');
            }

            //set user type..
            if(config('config.domain_now') == 'creator'){
                $user->type = 'creator';
                $user->is_creator = 1;
                $user->save();
            }else{
                $user->is_reviewer = 1;
                if($user->is_creator == 1){
                    $user->type = 'creator';
                }
                $user->save();
            }

            Auth::login($user);
        } catch (Exception $exception) {
            Log::error($exception->getMessage());
        }

        return redirect($this->getRedirectURL());
    }

    /**
     * @return Response
     */
    public function setup(): Response
    {
        $categories = Category::get();;
        return Inertia::render('Setup', [
            'categories' => $categories,
        ]);
    }

    /**
     * @param SetupRequest $request
     * @return RedirectResponse
     */
    public function submitSetup(SetupRequest $request): RedirectResponse
    {
        $request->user()->finishSetup($request->validated());

        return redirect()->route('auth.settings');
    }

    /**
     * @return Response
     */
    public function settings(): Response
    {
        $categories = Category::get();
        
        return Inertia::render('Settings', [
            'countries' => config('countries'),
            'categories' => $categories,
        ]);
    }


    

    /**
     * @param UpdateSettingsRequest $request
     * @return RedirectResponse
     */
    public function updateSettings(UpdateSettingsRequest $request): RedirectResponse
    {
        $data = array_filter($request->validated());
        $user = $request->user();

        if ($request->filled('password')) {
            if(config('config.domain_now') == 'creator'){
                $data[$this->pass_column] = Hash::make($data['password']);
                unset($data['password']);
            }else{
                $data['password'] = Hash::make($data['password']);
            }
        }

        if ($request->filled('avatar')) {
            if (is_base64_image($request->avatar)) {
                $user->clearMediaCollection('avatars');
                $user->addMediaFromBase64($request->avatar)
                    ->toMediaCollection('avatars');
            }
        }

        $user->update($data);

        return redirect()->route('auth.settings');
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        if (strpos($_SERVER['HTTP_HOST'], 'creators') !== false) {
            return redirect('/'); 
        }else{
            return redirect('/'); 
        } 
        // return redirect()->route('pages.home'); 
        
    }

    public function deleteReviewer(Request $request,$id):RedirectResponse{
        $user = User::find($id);  
        $full_delete = false;
        if(config('config.domain_now') == 'creator' && $user->is_creator == 1){
            $user->is_creator = 0;
            if($user->is_reviewer != 1){
                $full_delete = true;
            }
        }else{
            $user->is_reviewer = 0;
            if($user->is_creator != 1){
                $full_delete = true;
            }
        } 
        if($full_delete){
            $user->delete();
        }else{
            $user->save();   
        }
        Auth::logout();
        if (strpos($_SERVER['HTTP_HOST'], 'creators') !== false) {
            return redirect('/'); 
        }else{
            return redirect('/'); 
        } 
    } 

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function updateLocale(Request $request): RedirectResponse
    {
        Session::put('locale', $request->input('locale'));

        return redirect()->back();
    }
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function verifyPatreon(Request $request): JsonResponse
    {
        $data = $request->all();
        $email = $data['email'];
        $password = $data['password'];
        $cookieJar = CookieJar::fromArray([
            'patreon_device_id'=>'d6d0eddd-2689-4cbf-a94d-27c9f45ce95e',
            'patreon_location_country_code'=>'IN',
            'patreon_locale_code'=>'en-US',
            '_ALGOLIA'=>'anonymous-75423509-1745-4ad9-83b5-65eef77b916b',
            '_gcl_au'=>'1.1.1847886448.1645088539',
            '_mkto_trk'=>'id:966-VYB-418&token:_mch-patreon.com-1645088539056-48032',
            '_ga'=>'GA1.2.247811531.1645088539',
            '_rdt_uuid'=>'1645088539257.6b39b9c2-ddaf-4de4-9960-7b50e739bcde',
            '_fbp'=>'fb.1.1645088539410.300145636',
            '_scid'=>'2e6f67bd-b549-4ca8-97c3-e6d1055354ff',
            'G_ENABLED_IDPS'=>'google',
            '__ssid'=>'c9776fd43ec938d2ba684ffe63b3640',
            '__stripe_mid'=>'d9093995-c58d-4d8f-b2cc-4bd75d0db479c39e66',
            '_gid'=>'GA1.2.362224843.1646029160',
            '_sctr'=>'1|1645986600000',
            'group_id'=>'4165166ec520006f09e6060574d51af49fb5c2a9d552ca5d62f6b905a14d6501',
            '__cf_bm'=>'zqqChLPQkm7mQqnVWaaWo6CaOqDoZL5_flyOzA_k5gI-1646037955-0-AQuiPJdvBhKahOIcGEOONnz63CphVQFgPUdMGkyJCFNzesqnqDL0gQjl26xydY368I9GugxKLh56Th6NHEddgnVnXXA/VgviD33pKUlstDod',
            '_gat'=>'1',
            'amplitude_idpatreon.com'=>'eyJkZXZpY2VJZCI6ImU2YmVmN2Y5LTI0N2EtNDQ4Yi1iZmE2LWNiMTljYjdkMzhjNCIsInVzZXJJZCI6IjcwMDMzMTQyIiwib3B0T3V0IjpmYWxzZSwic2Vzc2lvbklkIjoxNjQ2MDM3OTc4OTg4LCJsYXN0RXZlbnRUaW1lIjoxNjQ2MDM3OTc4OTk3LCJldmVudElkIjowLCJpZGVudGlmeUlkIjo1MCwic2VxdWVuY2VOdW1iZXIiOjUwfQ==',
            'datadome'=>'.7L9J0L49TbH1xsNlXi~_w0zj1AeEfUJVBUJn1ZFA4Ic254gHdqg9_Dze.md-onq1flm~gIeYKNSJww3jHFCgGbpdWZ1yp6ercuoucg.U6ZbImiW-3jX0Nlpi1s7mcJ6',
            '_dd_s'=>'rum=0&expire=1646038924141'

        ], '.patreon.com');
        
        // try {
            $client = new Client([
                'headers' => [ 
                    'Content-Type' => 'application/json',
                    'authority' => 'www.patreon.com',
                    'origin'=> 'https://www.patreon.com',
                    'referer'=> 'https://www.patreon.com/login'
                 ],
                // 'cookies'=> $cookieJar
            ]);
            $data = [
                'data' => [
                    'type'=> 'user',
                    'attributes' =>[
                        "email"=> $email,
                        "password"=> $password
                    ],
                    "relationships" => []
                ]
            ];

            $response = $client->post('https://www.patreon.com/api/login',
                ['json' => $data]
            );
            $body = json_decode($response->getBody()->getContents(), True);
            print_r($body);
            die();
            return response()->json([
                'response' => [
                    'status' => 200,
                    'message' => 'User verified.',
                ]
            ]);
        // } catch (ClientException $exception) {
        //     return response()->json([
        //         'response' => [
        //             'status' => 403,
        //             'message' => 'User not found.',
        //         ]
        //     ]);
        // }
    }
    public function verifyTwitch(Request $request): JsonResponse
    {
        $data = $request->all();
        $username = $data['username'];
        try {
            $client = new Client([
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Client-Id' => 'r8s4dac0uhzifbpu9sjdiwzctle17ff' 
                    ]
            ]);
            $data = [
                "operationName"=> "PlaybackAccessToken_Template",
                "query"=> 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) { streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) { value signature __typename } videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) { value signature __typename }}',
                "variables"=> [
                    "isLive"=> true,
                    "login"=> $username,
                    "isVod"=> false,
                    "vodID"=> "",
                    "playerType"=> "site"
                ]
            ];

            $response = $client->post('https://gql.twitch.tv/gql',
                ['json' => $data]
            );
            $verify = "False";
            $body = json_decode($response->getBody()->getContents(), True);
            if($body['data']['streamPlaybackAccessToken'] != ""){
                $verify = "True";
            }
            if($verify == "True"){
                return response()->json([
                    'response' => [
                        'status' => 200,
                        'message' => 'User verified.',
                    ]
                ]);
            }else{
                return response()->json([
                    'response' => [
                        'status' => 403,
                        'message' => 'User not found.',
                    ]
                ]);
            }
            
        } catch (ClientException $exception) {
            return response()->json([
                'response' => [
                    'status' => 403,
                    'message' => 'User not found.',
                ]
            ]);
        }
    }

    function generateVerifyLink($platform){
        if(in_array($platform, ['patreon', 'twitch', 'youtube', 'fansly'])){
            switch($platform){
                case "patreon":
                    $auth_url = 'https://www.patreon.com/oauth2/authorize?'.http_build_query([
                        "response_type" => "code",
                        "client_id" => env('PATREON_CLIENT_ID'),
                        "scope" => "users",
                        "redirect_uri" => url('patreon/callback'),
                        "state" => "123",
                    ]); 
                    return redirect($auth_url);die;
                    break;
                    
                case "twitch":
                    $auth_url = env('TWITCH_API_URL').'/authorize?'.http_build_query([
                        "response_type" => "code",
                        "client_id" => env('TWITCH_CLIENT_ID'),
                        "scope" => "user:read:email user:edit",
                        "redirect_uri" => url('twitch/callback'),
                        "state" => "123",
                    ]);
                    return redirect($auth_url); 
                    break;

                case "youtube":
                    return Socialite::driver('google')->scopes(['https://www.googleapis.com/auth/youtube'])->redirectUrl(url('youtube/callback'))->redirect();
                    break;

                case "fansly":
                    return view('auth.fansly');
                    break;    
            }
        }
        return redirect()->back(); 
    }

    /**
     * Callback function to get the response of patreon account.. 
     * @return RedirectResponse
     */
    function patreonCallback(Request $request){
        //Get access token..
        if(!empty($request->code)){
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, env('PATREON_API_URL').'/token');
            curl_setopt($ch, CURLOPT_POST, TRUE);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [ 'Content-Type: application/x-www-form-urlencoded']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
                'code'          => $request->code,
                'client_id'     => env('PATREON_CLIENT_ID'),
                'client_secret' => env('PATREON_CLIENT_SECRET'),
                'redirect_uri'  => url('patreon/callback'),
                'grant_type'    => 'authorization_code',
            ]));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close ($ch);

            if(!empty($response)){
                $token = json_decode($response, true);

                //Get profile..
                if(!empty($token['access_token'])){
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, env('PATREON_API_URL').'/api/current_user');
                    curl_setopt($ch, CURLOPT_HTTPHEADER, [ 'authorization: Bearer '.$token['access_token']]);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
                    $result = curl_exec($ch);
                    curl_close ($ch);
                    
                    $profile = json_decode($result, true);
                    if(isset($profile['data']['id']) && !empty($profile['data']['id'])){
                        $request->user()->patreon_verified = 1;
                        $request->user()->save();
                        return redirect($this->getRedirectURL());
                    }
                }
            }
        }
        return redirect($this->getRedirectURL());
    }

    /**
     * Callback function to get the response of twitch account.. 
     * @return RedirectResponse
     */
    function twitchCallback(Request $request){
        //Get access token..
        if(!empty($request->code)){
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, env('TWITCH_API_URL').'/token');
            curl_setopt($ch, CURLOPT_POST, TRUE);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [ 'Content-Type: application/x-www-form-urlencoded']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
                'code'          => $request->code,
                'client_id'     => env('TWITCH_CLIENT_ID'),
                'client_secret' => env('TWITCH_CLIENT_SECRET'),
                'redirect_uri' => url('twitch/callback'),
                'grant_type'    => 'authorization_code',
            ]));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close ($ch);

            if(!empty($response)){
                $token = json_decode($response, true);

                //Get profile..
                if(!empty($token['access_token'])){
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, env('TWITCH_API_URL').'/validate');
                    curl_setopt($ch, CURLOPT_HTTPHEADER, [ 'authorization: Bearer '.$token['access_token']]);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
                    $result = curl_exec($ch);
                    curl_close ($ch);
                    
                    $profile = json_decode($result, true);
                    if(isset($profile['client_id']) && !empty($profile['client_id'])){
                        $request->user()->twitch_verified = 1;
                        $request->user()->save();
                        return redirect($this->getRedirectURL());
                    }
                }
            }
        }
        return redirect($this->getRedirectURL());
    }

    /**
     * Callback function to get the response of youtube account.. 
     * @return RedirectResponse
     */
    public function youtubeCallback(Request $request): RedirectResponse
    {
        try {
            $googleUser = Socialite::driver('google')->redirectUrl(url('youtube/callback'))->user();
            if (!empty($googleUser->id)) {
                $request->user()->youtube_verified = 1;
                $request->user()->save();
                return redirect($this->getRedirectURL());
            }

        } catch (Exception $exception) {
            Log::error($exception->getMessage());
        }

        return redirect($this->getRedirectURL());
    }

    public function fanslyCallback(Request $request): RedirectResponse  {
        
        $validated = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        
        $data = $request->all();
        try {
            $client = new Client([
                'headers' => [
                    'Content-Type' => 'application/json'
                ]
            ]);
            $data = [
                "username"=> $data['email'],
                "password"=> $data['password'],
                "deviceId"=> "350605904770510849"
            ];

            $response = $client->post('https://apiv2.fansly.com/api/v1/login',
                ['json' => $data]
            );
            $body = json_decode($response->getBody()->getContents(), True);
            if($body["success"] == 1){
                $request->user()->fansly_verified = 1;
                $request->user()->save();
                return redirect($this->getRedirectURL());
            }
        } catch (ClientException $exception) {}

        return redirect($this->getRedirectURL());
    }
 
    function getRedirectURL(){
        $user = request()->user();
        if(!empty($user)){
            return match ($user->type) {
                'creator' => route('creator_dashboard.index'),
                'reviewer' => route('categories.index'),
            };
        }
        return route('auth.register');
    }

    //For reviewers to rate the creators via email link..
    function creatorReviewLink(Request $request, $username, $code): RedirectResponse {
        if(!empty($username) && !empty($code)){

            $creator = $this->userService->getCreatorByUsername($username);

            if(!empty($creator)){

                //Check if the code is valid and not expired..
                $invite = ReviewInvite::where('code', $code)->where('created_at', '>', now()->subDays(30)->endOfDay())->first();
               
                if(!empty($invite)){
                    //Update session invite..
                    $request->session()->put('inviter_id', $invite->id);

                    //Check if reviewer user is logged in..
                    if($request->user()){
                        //Redirect to creator profile..
                        return redirect()->route('users.view', [$username]); 
                    }else{
                        //Redirect to register..    
                        return redirect()->route('auth.sign-in');       
                    }
                }
            }
        }
        return redirect()->route('pages.home');
    }

    /**
     * Forgot password
     */
    public function showForgotPassword()
    {
        return Inertia::render('ForgotPassword');
    }


    /**
     * Submit forgot password
     */
    public function submitForgotPassword(Request $request)
    {
        $userCount = User::where(['email' => $request->email])->where($this->user_type, 1)->count();

        if($userCount > 0){
            $token = Str::random(60);
            DB::table('password_resets')->where('email', '=', $request->email)->delete();
            $insertStatus = DB::insert('insert into `password_resets` (email, token, created_at) values (?, ?, ?)', [$request->email, $token, Carbon::now()->toDateTimeString()]);
            
            if($insertStatus){
                Mail::to($request->email)->send(new ResetPassword([
                    "email" => $request->email,
                    "token" => $token
                ]));
                return redirect()->back()->withErrors(['success' => "Reset passowrd link send to your mail"]);

            }
        }else{
            return redirect()->back()->withErrors(['email' => "Invalid email"]);
        }
    }

    /**
     * change password
     */
    public function changePassword($token = null)
    {
        
        try {
            if($token != null){
                $token_obj = DB::table('password_resets')->where('token', '=', $token)->get();
                
                if($token_obj && $token_obj->count() > 0){
                    $token_obj = $token_obj[0];
                    $user = User::where(["email"=> $token_obj->email])->first();

                    return Inertia::render('ResetPassword', [
                        'token' => $token_obj->token,
                        'user' => $user,
                    ]);

                }else{
                    throw new Exception("Invalid token");
                }
            }
            //code...
        } catch (\Throwable $th) {
            abort(404);
        }
    }

    public function updatepassword(Request $request, $token = null)
    {
        $validated = $request->validate([
            'password' => 'required|string|min:6',
            'confirmPassword' => 'required|same:password',
            'token' => 'required',
        ]);
        
        try {
            if($validated["token"] != null){
                $token_obj = DB::table('password_resets')->where('token', '=', $validated["token"])->get();
                $hashPassword = Hash::make($validated['password']);
                if($token_obj && $token_obj->count() > 0){
                    $token_obj = $token_obj[0];

                    $user = User::where(["email"=> $token_obj->email])->update(["{$this->pass_column}"=> $hashPassword]);
                    DB::table('password_resets')->where('email', '=', $request->email)->delete();
                    
                    return redirect()->route('auth.login')->withErrors(['success' => "A password reset link will be sent to your e-mail inbox"]);
                }
                else{
                    throw new Exception("Invalid token");
                }
            }
            //code...
        } catch (\Throwable $th) {
            abort(404);
        }

    }

    // Fav list page //
    public function myFavorites(){
        return Inertia::render('MyFavourites');
    }
}
