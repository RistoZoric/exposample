<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class UserListResource extends JsonResource
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
            'received_reviews_count' => $this->received_reviews_count,
            'rating' => $this->getRating(),
        ];
    }
}
