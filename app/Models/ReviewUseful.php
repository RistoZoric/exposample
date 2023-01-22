<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperReviewUseful
 */
class ReviewUseful extends Model
{
    protected $fillable = [
        'review_id',
        'user_id',
    ];
}
 