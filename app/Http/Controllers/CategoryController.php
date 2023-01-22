<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\UserListResource;
use App\Jobs\IncrementCategoryClicks;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Stevebauman\Location\Facades\Location;

class CategoryController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $categories = Category::where('slug', '!=', 'adult')->with('topCreators')
            ->withCount('creators')
            ->get()->sortByDesc(function($hackathon){
                return $hackathon->creators->count();
            });

        return Inertia::render('Categories', [
            'categories' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function view(string $slug): Response
    {
        $category = Category::with('creators')
            ->slug($slug)
            ->withCount('creators')
            ->first();

        $users = User::creator()
            ->category($category)
            ->finishedSetup()
            ->isVerified()
            ->paginate(21);

        IncrementCategoryClicks::dispatch($category);

        return Inertia::render('Category', [
            'category' => new CategoryResource($category),
            'users' => UserListResource::collection($users),
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function search(Request $request): Response
    {
        $query = $request->query('q');

        $categories = Category::get();

        $getAllVerified = User::isVerified()->pluck('id');
 
        if($getAllVerified->count() > 0){
            $users = User::search($query)->whereIn('id', $getAllVerified->toArray())->paginate(21);
        }else{
            $users = User::search($query)->paginate(21);
        }

        return Inertia::render('Search', [
            'q' => $query,
            'categories' => CategoryResource::collection($categories),
            'users' => UserListResource::collection($users),
        ]);
    }

    public function topRated(): Response
    {
        $categories = Category::get();

        $users = User::creator()
            ->finishedSetup()
            ->isVerified()
            ->byRating()
            ->paginate(16);

        return Inertia::render('CustomCategory', [
            'title' => __('categories.top_rated.title'),
            'subtitle' => __('categories.top_rated.subtitle'),
            'categories' => CategoryResource::collection($categories),
            'users' => UserListResource::collection($users),
        ]);
    }

    public function nearYou(Request $request): Response
    {
        $categories = Category::get();

        $location = Location::get($request->server('HTTP_X_FORWARDED_FOR'));

        $users = User::creator()
            ->finishedSetup()
            ->country($location->countryCode)
            ->paginate(16);

        return Inertia::render('CustomCategory', [
            'title' => __('categories.near_you.title'),
            'subtitle' => __('categories.near_you.subtitle'),
            'categories' => CategoryResource::collection($categories),
            'users' => UserListResource::collection($users),
        ]);
    }

    public function featured(): Response
    {
        $categories = Category::get();

        $users = User::creator()
            ->finishedSetup()
            ->plan('Premium')
            ->paginate(16);

        return Inertia::render('CustomCategory', [
            'title' => __('categories.featured.title'),
            'subtitle' => __('categories.featured.subtitle'),
            'categories' => CategoryResource::collection($categories),
            'users' => UserListResource::collection($users),
        ]);
    }
}
 