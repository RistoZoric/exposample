<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostResource extends JsonResource
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
            'image' => $this->image,
            'title' => $this->title,
            'body' => $this->body,
            'author_image' => $this->author_image,
            'author_name' => $this->author_name,
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'created_at_day' => $this->created_at->format('j'),
            'created_at_month' => $this->created_at->format('M'),
            'created_at_year' => $this->created_at->format('Y'),
            'created_at' => $this->created_at->format('j M Y'),
        ];
    }
}
