<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperBlogPost
 */
class BlogPost extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug',
        'image',
        'title',
        'body',
        'author_image',
        'author_name',
        'meta_title',
        'meta_description',
        'meta_keywords',
    ];

    /**
     * @param $query
     * @param $slug
     * @return mixed
     */
    public function scopeSlug($query, $slug): mixed
    {
        return $query->where('slug', $slug);
    }
}
 