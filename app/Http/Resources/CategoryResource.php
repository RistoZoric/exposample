<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class CategoryResource extends JsonResource
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
            'slug' => $this->slug,
            'icon' => $this->icon,
            'name' => $this->name,
            'metaTitle' => $this->meta_title,
            'description' => $this->description,
            'creatorsCount' => $this->creators_count,
            'topCreators' => UserListResource::collection($this->topCreators),
        ];
    }
}
