<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $posts = BlogPost::all();
        
        $firstPost = $posts->slice(0, 1)->first();
        $secondPost = $posts->slice(1, 1)->first();
        $thirdAndForthPosts = $posts->slice(2, 2);
        $morePosts = $posts->slice(4);

        return Inertia::render('Blog', [
            'firstPost' => new BlogPostResource($firstPost),
            'secondPost' => new BlogPostResource($secondPost),
            'thirdAndForthPosts' => BlogPostResource::collection($thirdAndForthPosts),
            'morePosts' => BlogPostResource::collection($morePosts),
        ]);
    }

    /**
     * @param string $slug
     * @return RedirectResponse|Response
     */
    public function view(string $slug): RedirectResponse|Response
    {
        $post = BlogPost::slug($slug)->first();

        if (!$post) {
            abort(404);
        }

        return Inertia::render('BlogPost', [
            'post' => new BlogPostResource($post),
        ]);
    }
}
