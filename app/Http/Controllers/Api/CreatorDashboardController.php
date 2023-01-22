<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CreatorDashboardController extends Controller
{
    /**
     * @param Request $request
     * @return array|AnonymousResourceCollection
     */
    public function filterReviews(Request $request): AnonymousResourceCollection|array
    {
        $period = $request->query('period', 'today');
        $reviews = $request->user()->receivedReviews();
        if ($reviews) {
            $reviews = match ($period) {
                'all' => $reviews->latest(),
                'today' => $reviews->daily(),
                'this_week' => $reviews->weekly(),
                'this_month' => $reviews->monthly(),
            };
            $reviews = $reviews->get();
        }
        return ReviewResource::collection($reviews);
    }
}
