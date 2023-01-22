<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @mixin IdeHelperFavorite
 */
class Favorite extends Model
{
    protected $fillable = [
        'user_id',
        'favorite_id',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo
     */
    public function favorite(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @param $query
     * @param $id
     * @return mixed
     */
    public function scopeFavoriteId($query, $id): mixed
    {
        return $query->where('favorite_id', $id);
    }
}
 