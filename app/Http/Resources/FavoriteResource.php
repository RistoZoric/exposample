<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JetBrains\PhpStorm\Pure;

class FavoriteResource extends JsonResource
{
    /**
     * @param Request $request
     * @return UserListResource|array|null
     */
    #[Pure] public function toArray($request): UserListResource|array|null
    {
        if (!$this->resource) {
            return is_array($this->resource) ? [] : null;
        }
        return new UserListResource($this->favorite);
    }
}
 