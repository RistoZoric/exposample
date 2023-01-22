<?php

use App\Events\Registered;
use App\Mail\VerifyEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailchimpController;
use App\Http\Resources\UserListResource;
use App\Models\User;
use Illuminate\Http\Request;
use Tightenco\Ziggy\Ziggy;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Firefox\FirefoxOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\WebDriverBy;
 

Route::domain('creators.' . env('APP_URL'))->group(function () {
Route::get('/home', function(){ return redirect()->route('pages.home'); })->name('home');  
//Route::get('/home',[\App\Http\Controllers\PageController::class, 'creators'])->name('home');
  
Route::middleware('auth')->prefix('creator-dashboard')->name('creator_dashboard.')->group(function () {
    Route::middleware(['creator', 'setup'])->group(function () {
        Route::get( '/', [\App\Http\Controllers\CreatorDashboardController::class, 'index'])->name('index');
        Route::get( '/', [\App\Http\Controllers\CreatorDashboardController::class, 'index'])->name('home');
        Route::post( '/respond-to-review', [\App\Http\Controllers\CreatorDashboardController::class, 'respondToReview']) ->name('respond_to_review');
    });
});
    Route::get('/register', [\App\Http\Controllers\AuthController::class, 'showRegister']) ->name('register'); 
    Route::get('/sign-in', [\App\Http\Controllers\AuthController::class, 'showLogin']) ->name('sign-in');
    Route::get('/creator-dashboard',[\App\Http\Controllers\CreatorDashboardController::class, 'index'])->name('index');

        // Route::name('auth.')->group(function () {
        //     Route::middleware('guest')->group(function () {
        //         Route::get('/forgotpassword',[\App\Http\Controllers\AuthController::class, 'showForgotPassword']
        //         )->name('forgotpassword');
        //         Route::get('/forgotpassword/{token}',[\App\Http\Controllers\AuthController::class, 'changePassword']
        //         )->name('changePassword');
        //         Route::post('/updatepassword',[\App\Http\Controllers\AuthController::class, 'updatepassword']
        //         )->name('updatepassword');
        //         Route::post('/forgotpassword', [\App\Http\Controllers\AuthController::class, 'submitForgotPassword']
        //         )->name('forgotpasswordSubmit');
        //         Route::post( '/register', [\App\Http\Controllers\AuthController::class, 'register'] )
        //             ->name('register');
        //        // Route::post( '/login', [\App\Http\Controllers\AuthController::class, 'login'] ) ->name('login');
        //         Route::get('/facebook/redirect/{type}',[\App\Http\Controllers\AuthController::class, 'facebookRedirect'])
        //         ->name('facebook.redirect');
        //         Route::get('/facebook/callback/{type}',[\App\Http\Controllers\AuthController::class, 'facebookCallback']
        //         )->name('facebook.callback');
        //         Route::get( '/google/redirect/{type}', [\App\Http\Controllers\AuthController::class, 'googleRedirect'] )
        //             ->name('google.redirect');
        //         Route::get( '/google/callback/{type}', [\App\Http\Controllers\AuthController::class, 'googleCallback']  )
        //             ->name('google.callback');
        //         Route::post('/mailchimp/subscribe', [MailchimpController::class, 'subscribe'])
        //             ->name('mailchimp.subscribe'); 
        
        //     });
        //     Route::middleware('auth')->group(function () {
        //         Route::get(
        //             '/verify/{platform}',
        //             [\App\Http\Controllers\AuthController::class, 'generateVerifyLink']
        //         )
        //         ->name('account.verify');
        
        //         Route::get(
        //             '/patreon/callback',
        //             [\App\Http\Controllers\AuthController::class, 'patreonCallback']
        //         )
        //         ->name('patreon.callback');
        
        //         Route::get(
        //             '/twitch/callback',
        //             [\App\Http\Controllers\AuthController::class, 'twitchCallback']
        //         )
        //         ->name('twitch.callback');
        
        //         Route::get(
        //             '/youtube/callback',
        //             [\App\Http\Controllers\AuthController::class, 'youtubeCallback']
        //         )
        //         ->name('youtube.callback');
                    
        //         Route::post(
        //             '/fansly/callback',
        //             [\App\Http\Controllers\AuthController::class, 'fanslyCallback']
        //         )
        //             ->name('fansly.callback');
        
        //         Route::get(
        //             '/logout',
        //             [\App\Http\Controllers\AuthController::class, 'logout']
        //         )
        //             ->name('logout');
        //         Route::middleware('creator')->group(function () {
        //             Route::get(
        //                 '/setup',
        //                 [\App\Http\Controllers\AuthController::class, 'setup']
        //             )
        //                 ->name('setup'); 
        //             Route::post(
        //                 '/setup',
        //                 [\App\Http\Controllers\AuthController::class, 'submitSetup']
        //             )
        //                 ->name('submit_setup');
        //         });
        //         Route::get('/settings',[\App\Http\Controllers\AuthController::class, 'settings'])
        //             ->name('settings');
        //         Route::post(
        //             '/settings',
        //             [\App\Http\Controllers\AuthController::class, 'updateSettings']
        //         )->name('update_settings');
        
        //         Route::post(
        //             '/settings/{id}',
        //             [\App\Http\Controllers\AuthController::class, 'deleteReviewer']
        //         )->name('delete_reviewer');
        
                
        
        //         Route::get(
        //             '/user/type/{type}',
        //             [\App\Http\Controllers\AuthController::class, 'updateUserType']
        //         )
        //             ->name('update.usertype');
        //     });
        //     Route::post(
        //         '/locale',
        //         [\App\Http\Controllers\AuthController::class, 'updateLocale']
        //     )
        //         ->name('update_locale');
        // });
        
            // Route::get('/',[\App\Http\Controllers\CreatorDashboardController::class, 'index'])->name('index');
            // Route::post( '/respond-to-review', [\App\Http\Controllers\CreatorDashboardController::class, 'respondToReview'])
            //     ->name('respond_to_review');
                // Route::get(
                //     '/my-plan',
                //     [\App\Http\Controllers\CheckoutController::class, 'myPlan']
                // )
                //     ->name('my_plan');
                // Route::any(
                //     '/billing-details',
                //     [\App\Http\Controllers\CheckoutController::class, 'billingDetails']
                // )
                //     ->name('billing_details');
                // Route::get(
                //     '/{id}/success',
                //     [\App\Http\Controllers\CheckoutController::class, 'success']
                // )
                //     ->name('success')->middleware('signed');
                // Route::get(
                //     '/{id}/invoices/{invoiceId?}',
                //     [\App\Http\Controllers\CheckoutController::class, 'downloadInvoice']
                // )
                //     ->name('download_invoice')->middleware('signed');
                // Route::post(
                //     '/finish',
                //     [\App\Http\Controllers\CheckoutController::class, 'finish']
                // ) ->name('finish');
         
   
            
            Route::name('pages.')->group(function () {
                Route::get('/',[\App\Http\Controllers\PageController::class, 'creators']
                )->name('home');
                Route::get('/about-us',[\App\Http\Controllers\PageController::class, 'aboutUs'])->name('about_us');
                Route::get('/trust-in-reviews',
                    [\App\Http\Controllers\PageController::class, 'trustInReviews']
                )->name('trust_in_reviews');
                Route::get(
                    '/thank-you',
                    [\App\Http\Controllers\PageController::class, 'thankYou']
                )->name('thank_you');
                Route::get(
                    '/grow-with-privy',
                    [\App\Http\Controllers\PageController::class, 'landingPage']
                )->name('grow_with_privy');
                Route::get( '/creators', [\App\Http\Controllers\PageController::class, 'creators']
                )->name('creators');
                Route::get('/plans-and-pricing',[\App\Http\Controllers\PageController::class, 'plansAndPricing']
                )->name('plans_and_pricing');
                Route::get(
                    '/privacy-policy',
                    [\App\Http\Controllers\PageController::class, 'privacyPolicy']
                )->name('privacy_policy');
                Route::get(
                    '/terms-and-conditions',
                    [\App\Http\Controllers\PageController::class, 'termsAndConditions']
                )->name('terms_and_conditions');
                Route::get(
                    '/featured-creators',
                    [\App\Http\Controllers\PageController::class, 'featuredCreators']
                )->name('featured_creators');
            });
       
            // Route::get(
            //     '/',
            //     [\App\Http\Controllers\CreatorDashboardController::class, 'index']
            // )
            //     ->name('index');
            // Route::post(
            //     '/respond-to-review',
            //     [\App\Http\Controllers\CreatorDashboardController::class, 'respondToReview']
            // )
            //     ->name('respond_to_review');
        
    
  //  });
});

?>