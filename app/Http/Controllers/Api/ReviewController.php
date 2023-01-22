<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FlagReviewRequest;
use App\Models\Review;
use Huddle\Zendesk\Facades\Zendesk;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Zendesk\API\Exceptions\ApiResponseException;
use Zendesk\API\Exceptions\AuthException;
use Zendesk\API\Exceptions\ResponseException;

class ReviewController extends Controller
{
    /**
     * @param int $id
     * @param Request $request
     */
    public function voteAsUseful(int $id, Request $request)
    {
        $review = Review::findOrFail($id);
        $review->usefuls()->updateOrCreate([
            'user_id' => $request->user()->id,
        ]);
    }

    /**
     * @param int $id
     * @param Request $request
     */
    public function removeUsefulVote(int $id, Request $request)
    {
        $review = Review::findOrFail($id);
        $review->usefuls()->where('user_id', $request->user()->id)
            ->delete();
    }

    /**
     * @param int $id
     * @param FlagReviewRequest $request
     * @return JsonResponse
     * @throws ApiResponseException
     * @throws AuthException
     * @throws ResponseException
     */
    public function flag(int $id, FlagReviewRequest $request): JsonResponse
    {
        $data = $request->validated();

        $review = Review::findOrFail($id);

        $emailCcs = null;
        if ($request->user()) {
            $emailCcs =
                [
                    'user_email' => $request->user()->email,
                    'user_name' => $request->user()->full_name
                ];
        }

        if ($review->status === 'published') {
            $review->status = 'flagged';
            $review->flag_reason = $data['reason'];
            $review->save();

            Zendesk::tickets()->create([
                'subject' => 'Flagged review #' . $review->id,
                'comment' => [
                    'html_body' =>
                        trim('<b>Title:</b> ' . $review->title . '<br>') .
                        trim('<b>Description:</b> ' . $review->description) .
                        trim('<br><br>') .
                        trim('<b>Reason:</b> ' . $review->flag_reason)
                ],
                'priority' => 'normal',
                'email_ccs' => $emailCcs,
                'tags' => ['flagged'],
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Review has been flagged for moderation.',
        ]);
    }
}
