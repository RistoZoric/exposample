<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Http\Resources\UserListResource;
use App\Http\Resources\UserProfileResource;
use App\Services\ReviewService;
use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\ReviewInvite;
use App\Mail\SendReviewInvite;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    protected UserService $userService;
    protected ReviewService $reviewService;

    public function __construct(UserService $userService, ReviewService $reviewService)
    {
        $this->userService = $userService;
        $this->reviewService = $reviewService;
    }

    /**
     * @param string $username
     * @return Response
     */
    public function view(string $username): Response
    {
        $user = $this->userService->getCreatorByUsername($username);
        $suggestions = $this->userService->getSuggestedCreators();
        return Inertia::render('Profile', [
            'user' => new UserProfileResource($user),
            'suggestions' => UserListResource::collection($suggestions),
        ]);
    }

    /**
     * @param int $id
     * @param ReviewRequest $request
     * @return RedirectResponse
     */
    public function review(int $id, ReviewRequest $request): RedirectResponse
    {
        $creator = $this->userService->getCreatorById($id);

        $inviterId = $request->session()->get('inviter_id');
        $isVerified = false;
        if (!empty($inviterId)) {
            //find invite..
            $invite = ReviewInvite::find($inviterId);
            if(!empty($invite) && $invite->creator_id  === $creator->id ){
                $request->session()->remove('inviter_id');
                $isVerified = true;
            }
        }

        $review = $this->reviewService->create($creator, $request->user(), $request->validated(), $isVerified);

        if ($isVerified && !empty($invite) && !empty($review)) {
            $invite->review_id = $review->id;
            $invite->status = 1;
            $invite->save();
        }

        return redirect()->route('users.view', $creator->username);
    }

    /**
     * @param string $username
     * @param Request $request
     * @return RedirectResponse
     */
    public function inviteToReview(string $username, Request $request): RedirectResponse
    {
        $user = $this->userService->getCreatorByUsername($username);

        return redirect()->route('users.view', $username);
    }

    public function sendReviewInvite(Request $request): RedirectResponse  {
        $data = $request->all();
        if(!empty($data['email'])){
            $user = $request->user();
            $exp_email = array_map(function($e){ return trim($e); }, explode(',', $data['email']));
            if(!empty($exp_email)){
                foreach(array_unique($exp_email) as $email){
                    if($user->canInvite() && filter_var($email, FILTER_VALIDATE_EMAIL)){
                        //generate code
                        $code = md5(uniqid($email));
        
                        //create invite..
                        $invite = ReviewInvite::create([
                            'review_id' => 0,
                            'creator_id' => $user->id,
                            'name' =>  null,
                            'email' => $email,
                            'code' => $code,
                        ]);
        
                        //send mail..
                        Mail::to($email)->send(new SendReviewInvite([
                            "user" => $user,
                            "invite" => $invite,
                        ]));

                        $user->refresh();
                    } 
                }
            }
        } 

        return redirect()->route('creator_dashboard.index');
    }

}
