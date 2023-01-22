<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ReviewResource;
use App\Http\Resources\UserListResource;
use App\Models\Review;
use App\Models\User;
use App\Services\CategoryService;
use App\Services\ReviewService;
use App\Services\UserService;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    protected UserService $userService;
    protected ReviewService $reviewService;
    protected CategoryService $categoryService;

    public function __construct(
        UserService     $userService,
        ReviewService   $reviewService,
        CategoryService $categoryService
    )
    {
        $this->userService = $userService;
        $this->reviewService = $reviewService;
        $this->categoryService = $categoryService;
    }

    /**
     * @return Response
     */
    public function home()
    {
        
        $categories = $this->categoryService->getCategoriesShownOnHome(4);
        $reviews = $this->reviewService->getRecentReviews(18);
        $highlightedReview = $this->reviewService->getHighlightedReview(3);
        
        // if (request()->inertia()) {
        //     return response(null, 409)->header('X-Inertia-Location', url()->current());
        // }
        // return view('index', compact('categories', 'reviews', 'highlightedReview'));
        

        return Inertia::render('Home', [
            'categories' => CategoryResource::collection($categories),
            'recentReviews' => ReviewResource::collection($reviews),
            'highlightedReview' => ReviewResource::collection($highlightedReview),
        ]);
    }

    public function featuredCreators()
    {
         $creators = $this->userService->getFeaturedCreators();
        // $creators=""; 
        return Inertia::render('FeaturedCreators', [
            'creators' => $creators,
        ]);
        //  return view('featured-creators', compact('creators'));
    }

    /**
     * @return Response
     */
    public function aboutUs(): Response
    {
        $reviews = Review::hasDescription()
            ->whereHas('creator', function ($query) {
                $query->username('privyreviews');
            })
            ->latest()
            ->limit(4)
            ->get();

        return Inertia::render('AboutUs', [
            'reviews' => ReviewResource::collection($reviews),
        ]);
    }

    /**
     * @return Response
     */
    public function trustInReviews(): Response
    {
        return Inertia::render('TrustInReviews');
    }

    /**
     * @return Response
     */
    public function thankYou(): Response
    {
        return Inertia::render('ThankYou');
    }

    /**
     * @return Response
     */
    public function creators(): Response
    {
        $highlightedReview = $this->reviewService->getHighlightedReview(3);

        return Inertia::render('Creators', [
            'highlightedReview' => ReviewResource::collection($highlightedReview),
            'context' => 'creator'
        ]);
    }

    /**
     * @return Response
     */
    public function plansAndPricing(): Response
    {
        return Inertia::render('PlansAndPricing');
    }

    /**
     * @return Response
     */
    public function privacyPolicy(): Response
    {
        return Inertia::render('PrivacyPolicy');
    }

    /**
     * @return Response
     */
    public function termsAndConditions(): Response
    {
        return Inertia::render('TermsAndConditions');
    }

    /**
     * @return Response
     */
    public function landingPage(): Response  //Landing Page added
    {
        return Inertia::render('LandingPage');
    }
}
