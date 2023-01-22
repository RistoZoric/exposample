<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class UserProfileResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array|null
     */
    public function toArray($request): ?array
    {
        if (!$this->resource) {
            return is_array($this->resource) ? [] : null;
        }
        return [
            'id' => $this->id,
            'avatar' => $this->avatar()?->getFullUrl('avatar'),
            'username' => $this->username,
            'full_name' => $this->full_name,
            'gender' => $this->gender,
            'category' => $this->category,
            'description' => $this->description,
            'rating' => $this->getRating(),
            'rating_text' => $this->getRatingInText(),
            'rating_percentages' => $this->getRatingPercentages(),
            'reviews_by_rating' => $this->receivedReviews->groupBy('rating'),
            'written_reviews_count' => $this->written_reviews_count,
            'received_reviews_count' => $this->received_reviews_count,
            'reviews' => ReviewResource::collection($this->receivedReviews),
            'plan' => $this->getPlan(),
            'my_review' => $this->getAuthUserReview(),
            'is_favorited' => $this->isFavoritedByAuthUser(),
            'onlyfans_verified' => $this->onlyfans_verified,
            'patreon_verified' => $this->onlyfans_verified,
            'twitch_verified' => $this->onlyfans_verified,
            'youtube_verified' => $this->onlyfans_verified,
            'kickstarter_verified' => $this->onlyfans_verified,
            'fansly_verified' => $this->onlyfans_verified,
            'onlyfans_username' => $this->onlyfans_username,
            'fansly_username' => $this->fansly_username,
            'patreon_username' => $this->patreon_username,
            'twitch_username' => $this->twitch_username,
            'youtube_username' => $this->youtube_username,
            'kickstarter_username' => $this->kickstarter_username,
            'b_avg' => $this->avg_rating,
            'is_verified' => $this->is_verified,
            'is_email_verified' => (!is_null($this->email_verified_at) ? true : false),
        ];
    }
}
