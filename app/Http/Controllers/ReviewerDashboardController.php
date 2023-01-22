<?php

namespace App\Http\Controllers;

use App\Http\Requests\RespondToReviewRequest;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReviewerDashboardController extends Controller
{
    /**
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $reviews = $request->user()->receivedReviews()
            ->weekly()
            ->get();

        $reviewsByCount = $reviews->groupBy(function ($item) {
            return Carbon::parse($item->created_at)->format('l');
        })
            ->transform(function ($item) {
                return $item->count();
            })
            ->toArray();

        $lineChartCount = [];
        for ($i = 0; $i < 7; $i++) {
            $day = Carbon::now()->startOf('week')->addDays($i)->format('l');
            $lineChartCount[$day] = 0;
        }
        foreach ($reviewsByCount as $key => $value) {
            $lineChartCount[$key] = $value;
        }

        return Inertia::render('ReviewerDashboard');
    }

    /**
     * @param RespondToReviewRequest $request
     * @return RedirectResponse
     */
    public function respondToReview(RespondToReviewRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $review = $request->user()->receivedReviews()
            ->where('id', $data['id'])
            ->first();

        if (empty($review->response)) {
            $review->response = $data['response'];
            $review->save();
        }

        return redirect()->route('reviewer_dashboard.index')
            ->with('message', 'Your response has been submitted.');
    }
}
