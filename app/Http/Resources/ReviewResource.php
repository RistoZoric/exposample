<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class ReviewResource extends JsonResource
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
            'avatar' => $this->reviewer->avatar()?->getFullUrl('avatar'),
            'username' => $this->reviewer->username,
            'written_reviews_count' => $this->reviewer->written_reviews_count,
            'rating' => $this->rating,
            'platform' => __('profile.platforms.' . $this->platform),
            'title' => $this->title,
            'description' => $this->description,
            'creator_username' => $this->creator->username,
            'type' => $this->reviewer->type,
            'status' => __('review.status.' . $this->status),
            'date' => $this->created_at->diffForHumans(),
            'response' => $this->response,
            'is_verified' => $this->is_verified,
            'usefuls_count' => $this->usefuls_count,
            'is_voted_as_useful' => $this->isVotedAsUsefulByAuthUser(),
        ];
    }
}
