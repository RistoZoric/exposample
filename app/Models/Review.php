<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;

/**
 * @mixin IdeHelperReview
 */
class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'creator_id',
        'reviewer_id',
        'rating',
        'title',
        'description',
        'is_verified',
        'response',
        'status',
        'flag_reason',
        'platform',
    ];

    /**
     * @var string[]
     */
    protected $withCount = [
        'usefuls',
    ];

    protected $with = [
        'reviewer',
        'creator'
    ];

    /**
     * @return BelongsTo
     */
    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class)->without('receivedReviews');
    }

    /**
     * @return BelongsTo
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class)->without('receivedReviews');
    }

    /**
     * @return HasOne
     */
    public function invite(): HasOne
    {
        return $this->hasOne(ReviewInvite::class);
    }

    /**
     * @return HasMany
     */
    public function usefuls(): HasMany
    {
        return $this->hasMany(ReviewUseful::class);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeAll($query): mixed
    {
        return $query
            /*->where('created_at', '>=', Carbon::now()->startOf('year'))
            ->where('created_at', '<=', Carbon::now()->endOf('year')); */
            //For testing by Ghrix
            ->where('created_at', '>=', Carbon::now()->subdays(365))
            ->where('created_at', '<=', Carbon::now()->endOf('year'));
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeDaily($query): mixed
    {
        return $query
            ->where('created_at', '>=', Carbon::now()->startOf('day'))
            ->where('created_at', '<=', Carbon::now()->endOf('day'));
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeWeekly($query): mixed
    {
        return $query
            ->where('created_at', '>=', Carbon::now()->startOf('week'))
            ->where('created_at', '<=', Carbon::now()->endOf('week'));
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeMonthly($query): mixed
    {
        return $query
            ->where('created_at', '>=', Carbon::now()->startOf('month'))
            ->where('created_at', '<=', Carbon::now()->endOf('month'));
    }



    /**
     * @param $query
     * @return mixed
     */
    public function scopeHasTitle($query): mixed
    {
        return $query
            ->whereNotNull('title')
            ->where('title', '!=', '');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeHasDescription($query): mixed
    {
        return $query
            ->whereNotNull('description')
            ->where('description', '!=', '');
    }

    /**
     * @return bool
     */
    public function isVotedAsUsefulByAuthUser(): bool
    {
        if (!Auth::check()) {
            return false;
        }
        if ($this->usefuls()->where('user_id', Auth::user()->id)->first()) {
            return true;
        }
        return false;
    }
}
