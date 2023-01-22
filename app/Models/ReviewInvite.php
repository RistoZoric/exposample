<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperReviewInvite
 */
class ReviewInvite extends Model
{
    protected $fillable = [
        'creator_id',
        'review_id',
        'name',
        'email',
        'status',
        'code',
    ];
} 
