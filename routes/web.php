<?php

use App\Models\User;
use App\Mail\VerifyEmail;
use App\Events\Registered;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Facebook\WebDriver\WebDriverBy;
use Illuminate\Support\Facades\Mail;
use Spatie\Sitemap\SitemapGenerator;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserListResource;
use App\Http\Controllers\MailchimpController;
use Facebook\WebDriver\Firefox\FirefoxOptions;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 
 
Route::name('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get( '/sign-in', [\App\Http\Controllers\AuthController::class, 'showLogin'])
            ->name('sign-in');

        Route::get('/register', [\App\Http\Controllers\AuthController::class, 'showRegister'])
            ->name('register');

        Route::get(
            '/verify-email/{token}',
            [\App\Http\Controllers\AuthController::class, 'verifyEmail']
        )->name('verify.email');

        Route::get(
            '/forgot-password',
            [\App\Http\Controllers\AuthController::class, 'showForgotPassword']
        )
            ->name('forgotpassword');
        Route::get(
            '/forgot-password/{token}',
            [\App\Http\Controllers\AuthController::class, 'changePassword']
        )
            ->name('changePassword');
        Route::post(
            '/updatepassword',
            [\App\Http\Controllers\AuthController::class, 'updatepassword']
        )->name('updatepassword');
        Route::post('/forgotpassword', [\App\Http\Controllers\AuthController::class, 'submitForgotPassword']
        )
            ->name('forgotpasswordSubmit');
        Route::post( '/register', [\App\Http\Controllers\AuthController::class, 'register'] )
            ->name('register');
        Route::post( '/login', [\App\Http\Controllers\AuthController::class, 'login'] ) ->name('login');
        Route::get('/facebook/redirect/{type}',
            [\App\Http\Controllers\AuthController::class, 'facebookRedirect']
        )
            ->name('facebook.redirect');
        Route::get(
            '/facebook/callback/{type}',
            [\App\Http\Controllers\AuthController::class, 'facebookCallback']
        )
            ->name('facebook.callback');
        Route::get( '/google/redirect/{type}', [\App\Http\Controllers\AuthController::class, 'googleRedirect'] )
            ->name('google.redirect');
        Route::get( '/google/callback/{type}', [\App\Http\Controllers\AuthController::class, 'googleCallback']  )
            ->name('google.callback');
        Route::post('/mailchimp/subscribe', [MailchimpController::class, 'subscribe'])
            ->name('mailchimp.subscribe');

            // 

    });
    Route::middleware('auth')->group(function () {
        Route::get(
            '/verify/{platform}',
            [\App\Http\Controllers\AuthController::class, 'generateVerifyLink']
        )
        ->name('account.verify');

        Route::get(
            '/patreon/callback',
            [\App\Http\Controllers\AuthController::class, 'patreonCallback']
        )
        ->name('patreon.callback');

        Route::get(
            '/twitch/callback',
            [\App\Http\Controllers\AuthController::class, 'twitchCallback']
        )
        ->name('twitch.callback');

        Route::get(
            '/youtube/callback',
            [\App\Http\Controllers\AuthController::class, 'youtubeCallback']
        )
        ->name('youtube.callback');
            
        Route::post(
            '/fansly/callback',
            [\App\Http\Controllers\AuthController::class, 'fanslyCallback']
        )
            ->name('fansly.callback');

        Route::get(
            '/logout',
            [\App\Http\Controllers\AuthController::class, 'logout']
        )
            ->name('logout');
        Route::middleware('creator')->group(function () {
            Route::get(
                '/setup',
                [\App\Http\Controllers\AuthController::class, 'setup']
            )
                ->name('setup'); 
            Route::post(
                '/setup',
                [\App\Http\Controllers\AuthController::class, 'submitSetup']
            )
                ->name('submit_setup');
        });
        Route::get('/settings',[\App\Http\Controllers\AuthController::class, 'settings'])
            ->name('settings');
        Route::post(
            '/settings',
            [\App\Http\Controllers\AuthController::class, 'updateSettings']
        )->name('update_settings');

        Route::post(
            '/settings/{id}',
            [\App\Http\Controllers\AuthController::class, 'deleteReviewer']
        )->name('delete_reviewer');

        

        Route::get(
            '/user/type/{type}',
            [\App\Http\Controllers\AuthController::class, 'updateUserType']
        )
            ->name('update.usertype');

        Route::get(
            '/favorites',
            [\App\Http\Controllers\AuthController::class, 'myFavorites']
        )
            ->name('favorites.list');
    });
    Route::post(
        '/locale',
        [\App\Http\Controllers\AuthController::class, 'updateLocale']
    )
        ->name('update_locale');
});

Route::middleware('auth')->prefix('reviewer-dashboard')->name('reviewer_dashboard.')->group(function () {
        Route::get(
            '/',
            [\App\Http\Controllers\ReviewerDashboardController::class, 'index']
        )
            ->name('index');
});

Route::middleware('auth')->prefix('creator-dashboard')->name('creator_dashboard.')->group(function () {
    Route::middleware(['creator', 'setup'])->group(function () {
        Route::get( '/', [\App\Http\Controllers\CreatorDashboardController::class, 'index'])
            ->name('index');
        Route::post(
            '/respond-to-review',
            [\App\Http\Controllers\CreatorDashboardController::class, 'respondToReview']
        )
            ->name('respond_to_review');
    });
});

Route::middleware('auth')->prefix('checkout')->name('checkout.')->group(function () {
    Route::middleware(['creator', 'setup'])->group(function () {
        Route::any(
            '/billing-details',
            [\App\Http\Controllers\CheckoutController::class, 'billingDetails']
        )
            ->name('billing_details');
        Route::get(
            '/{id}/success',
            [\App\Http\Controllers\CheckoutController::class, 'success']
        )
            ->name('success')->middleware('signed');
        Route::get(
            '/{id}/invoices/{invoiceId?}',
            [\App\Http\Controllers\CheckoutController::class, 'downloadInvoice']
        )
            ->name('download_invoice')->middleware('signed');
        Route::post(
            '/finish',
            [\App\Http\Controllers\CheckoutController::class, 'finish']
        ) ->name('finish');
    });
});

Route::get(
    '/checkout/my-plan',
    [\App\Http\Controllers\CheckoutController::class, 'myPlan']
)
    ->name('checkout.my_plan');

Route::name('pages.')->group(function () {
    if(config('config.domain_now') == 'reviewer'){
        Route::get( '/', [\App\Http\Controllers\PageController::class, 'home'] )
            ->name('home');
    }
    Route::get(
        '/about-us',
        [\App\Http\Controllers\PageController::class, 'aboutUs']
    )
        ->name('about_us');
    Route::get(
        '/trust-in-reviews',
        [\App\Http\Controllers\PageController::class, 'trustInReviews']
    )
        ->name('trust_in_reviews');
    Route::get(
        '/thank-you',
        [\App\Http\Controllers\PageController::class, 'thankYou']
    )
        ->name('thank_you_page');
    Route::get(
        '/grow-with-privy',
        [\App\Http\Controllers\PageController::class, 'landingPage']
    )
        ->name('grow_with_privy');
    // Route::get( '/creators', [\App\Http\Controllers\PageController::class, 'creators']) ->name('creators');
    Route::get( '/plans-and-pricing', [\App\Http\Controllers\PageController::class, 'plansAndPricing']
    )
        ->name('plans_and_pricing');
    Route::get(
        '/privacy-policy',
        [\App\Http\Controllers\PageController::class, 'privacyPolicy']
    )
        ->name('privacy_policy');
    Route::get(
        '/terms-and-conditions',
        [\App\Http\Controllers\PageController::class, 'termsAndConditions']
    )
        ->name('terms_and_conditions');
    Route::get(
        '/featured-creators',
        [\App\Http\Controllers\PageController::class, 'featuredCreators']
    )
        ->name('featured_creators');

    Route::get(
        '/creator/@{username}/review/{code}',
        [\App\Http\Controllers\AuthController::class, 'creatorReviewLink']
    )->name('creator.review');

    Route::get(
        '/review/invite',
        [\App\Http\Controllers\UserController::class, 'sendReviewInvite']
    )->name('creator.reviewinvite');
});

Route::prefix('blog')->name('blog.')->group(function () {
    Route::get(
        '/',
        [\App\Http\Controllers\BlogController::class, 'index']
    )
        ->name('index');
    Route::get(
        '/page/{page?}',
        [\App\Http\Controllers\BlogController::class, 'index']
    )
        ->name('page');
    Route::get(
        '/{slug}',
        [\App\Http\Controllers\BlogController::class, 'view']
    )
        ->name('view');; 
});

Route::prefix('/@{username}')->name('users.')->group(function () {
    Route::get(
        '/',
        [\App\Http\Controllers\UserController::class, 'view']
    )
        ->name('view');
    Route::post(
        '/review',
        [\App\Http\Controllers\UserController::class, 'review']
    )
        ->name('review');
    Route::middleware(['auth', 'signed'])->group(function () {
        Route::get(
            '/invite-to-review',
            [\App\Http\Controllers\UserController::class, 'inviteToReview']
        )
            ->name('invite_to_review');
    });
});

Route::prefix('categories')->name('categories.')->group(function () {
    Route::get(
        '/',
        [\App\Http\Controllers\CategoryController::class, 'index']
    )
        ->name('index');
    Route::get(
        '/search',
        [\App\Http\Controllers\CategoryController::class, 'search']
    )
        ->name('search');
    Route::get(
        '/top-rated',
        [\App\Http\Controllers\CategoryController::class, 'topRated']
    )
        ->name('top_rated');
    Route::get(
        '/near-you',
        [\App\Http\Controllers\CategoryController::class, 'nearYou']
    )
        ->name('near_you');
    Route::get(
        '/featured',
        [\App\Http\Controllers\CategoryController::class, 'featured']
    )
        ->name('featured');
    Route::get(
        '/{slug}',
        [\App\Http\Controllers\CategoryController::class, 'view']
    )
        ->name('view');
});

/**
 * API Routes
 */
Route::prefix('api')->name('api.')->group(function () {
    Route::get('routes', fn () => response()->json(new Ziggy));
    Route::prefix('auth')->name('auth.')->group(function () {
        Route::middleware('auth')->group(function () {
            Route::get(
                '/favorites/{id}/add',
                [\App\Http\Controllers\Api\AuthController::class, 'addFavorite']
            )
                ->name('favorites.add');
            Route::get(
                '/favorites/{id}/remove',
                [\App\Http\Controllers\Api\AuthController::class, 'removeFavorite']
            )
                ->name('favorites.remove');
        });
    });
    Route::prefix('checkout')->name('checkout.')->group(function () {
        Route::get(
            '/verify-promo-code',
            [\App\Http\Controllers\Api\CheckoutController::class, 'verifyPromoCode']
        )
            ->name('verify_promo_code');
    });
    Route::prefix('creator_dashboard')->name('creator_dashboard.')->group(function () {
        Route::get(
            '/filter-reviews',
            [\App\Http\Controllers\Api\CreatorDashboardController::class, 'filterReviews']
        )
            ->name('filter_reviews');
    });
    Route::prefix('/reviews/{id}')->name('reviews.')->group(function () {
        Route::get(
            '/useful',
            [\App\Http\Controllers\Api\ReviewController::class, 'voteAsUseful']
        )
            ->name('vote_as_useful');
        Route::get('/remove-useful-vote', [
            \App\Http\Controllers\Api\ReviewController::class,
            'removeUsefulVote'
        ])
            ->name('remove_useful_vote');
        Route::post(
            '/flag',
            [\App\Http\Controllers\Api\ReviewController::class, 'flag']
        )
            ->name('flag');
    });
    Route::prefix('/zendesk')->name('zendesk.')->group(function () {
        Route::get(
            '/verify-subscriber/{email}',
            [\App\Http\Controllers\Api\ZendeskController::class, 'verifySubscriber']
        )
            ->name('verify_subscriber');
    });
    Route::get('/search', function (Request $request) {
        $query = $request->query('query', null);

        $users = User::search($query)->take(4)->get();

        return UserListResource::collection($users);
    })->name('search');
});

Route::get('/email', function() {
    $user = User::find(1006);
    Registered::dispatch($user);
});

//Reviewer Emails
Route::get('/email/reviewer/welcome', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\WelcomeReviewer());
});

Route::get('/email/reviewer/first-review', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\ReviewerFirstReview());
});

Route::get('/email/reviewer/happy-birthday', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\ReviewerHappyBirthday());
});

Route::get('/email/reviewer/first-review-awaits', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\ReviewerFirstReviewAwait());
});

Route::get('/email/reviewer/reviewer-feedback', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\ReviewerFeedback());
});


//Creator Emails

Route::get('/email/creator/welcome', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\WelcomeCreator());
});

Route::get('/email/creator/happy-birthday', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\CreatorHappyBirthday());
});

Route::get('/email/creator/sales-promo', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\CreatorSalesPromotions());
});

Route::get('/email/creator/ask-review', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\CreatorAskReview());
});

Route::get('/email/creator/creator-blog', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\CreatorBlog());
});

Route::get('/email/creator/creator-feedback', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\CreatorFeedback());
});

Route::get('/email/creator/miss-you', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\MissYou());
});

Route::get('/email/creator/weekly-stats', function() {
    $user = User::find(1006);
    Mail::to($user)->send(new \App\Mail\WeeklyStats());
});

Route::get('/scrape', function () {
    $driver = RemoteWebDriver::create("http://localhost:4444", DesiredCapabilities::firefox());
    $driver->get('https://onlyfans.com/');
    sleep(20);
    // $driver->findElement(WebDriverBy::xpath('//input[@name="email"]'))->sendKeys('hello2@privy.reviews'); // fill the search box
    // $driver->findElement(WebDriverBy::xpath('//input[@name="password"]'))->sendKeys('123Privy@#')->submit();
    sleep(15);
    $driver->quit(); 
    //    $users = [];
    //
    //    for ($page = 1; $page <= 42; $page++) {
    // $client = \Symfony\Component\Panther\Client::createFirefoxClient(null, [
    //     '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
    //     '--window-size=1200,1100',
    //     '--no-headless',
    //     '--disable-gpu',
    // ]);
    // $crawler = $client->request('GET', 'https://onlyfans.com/');
    // $crawler->filter('.creator-card')->each(function ($result) use (&$users) {
    //     $username = substr($result->filter('.creator-content .creator-username')->text(), 1);

    //     $users[$username]['username'] = $username;
    //     $users[$username]['full_name'] = $result->filter('.creator-content .creator-name')->text();
    //     $users[$username]['avatar'] = str_replace('https://cache.hubite.com/img/', '',
    //         $result->filter('.creator-header .creator-profile-picture img')->attr('src'));
    // });;
    // $client->close();
    // }
    //    $users = collect($users)
    //        ->unique();

    // $users = \App\Models\User::whereDoesntHave('media')->get();
    // foreach ($users as $user) {
    //     //            $u = new \App\Models\User;
    //     //            $u->username = $user['username'];
    //     //            $u->full_name = $user['full_name'];
    //     //            $u->email = $user['username'] . '@privy.reviews';
    //     //            $u->password = \Illuminate\Support\Facades\Hash::make(time());
    //     //            $u->type = 'creator';
    //     //            $u->gender = 'female';
    //     //            $u->is_scraped = true;
    //     //            $u->save();
    //     //            copyRemote($user['avatar'], storage_path('app/scraped_avatars/'.$user['username'].'.jpg'));
    //     $avatar = storage_path('app/scraped_avatars/' . $user->username . '.jpg');
    //     if (file_exists($avatar)) {
    //         $user->addMedia($avatar)
    //             ->toMediaCollection('avatars');
    //     }
    // });
});

Route::get('/sitemap', function(){

    SitemapGenerator::create('https://privy.reviews/')->writeToFile(public_path('sitemap.xml'));

    return 'Sitemap generated';

});