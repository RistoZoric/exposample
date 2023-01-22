<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use JetBrains\PhpStorm\ArrayShape;
use Laravel\Cashier\Billable;
use Laravel\Cashier\Subscription;
use Laravel\Scout\Searchable;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\Image\Manipulations;
use Spatie\ImageOptimizer\Optimizers\Jpegoptim;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * @mixin IdeHelperUser
 */
class User extends Authenticatable implements HasMedia
{
    use HasFactory, InteractsWithMedia, Billable, Notifiable, Searchable;

    /**
     * @var string[]
     */
    protected $with = [
        // 'category',
        'media',
        'receivedReviews',
    ];

    /**
     * @var string[]
     */
    protected $withCount = [
        'writtenReviews',
        'receivedReviews',
        'monthlyReviewInvites',
    ];

    /**
     * @var string[]
     */
    protected $fillable = [
        'username',
        'full_name',
        'email',
        'password',
        'password_creator',
        'phone_number',
        'gender',
        'date_of_birth',
        'country',
        'type',
        'category_id',
        'fb_id',
        'google_id',
        'description',
        'searchable_tags',
        'onlyfans_username',
        'fansly_username',
        'patreon_username',
        'twitch_username',
        'youtube_username',
        'kickstarter_username',
        'soundcloud_username',
        'fingerprint',
        'user_preferred_lang',
        'is_creator',
        'is_reviewer'
    ];

    /**
     * @var string[]
     */
    protected $hidden = [
        'password',
        'password_creator',
        'remember_token',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'date_of_birth' => 'date',
        'email_verified_at' => 'datetime',
        'onlyfans_verified' => 'boolean',
        'fansly_verified' => 'boolean',
        'patreon_verified' => 'boolean',
        'twitch_verified' => 'boolean',
        'youtube_verified' => 'boolean',
        'kickstarter_verified' => 'boolean',
        'soundcloud_verified' => 'boolean',
    ];

    protected $appends = ['is_verified'];

   /**
     * @return string
     */
    public function getIsVerifiedAttribute(): bool
    {
        return ($this->fansly_verified || $this->patreon_verified || $this->twitch_verified || $this->youtube_verified) ? true : false;
    }

    /**
     * @return string
     */
    public function searchableAs(): string
    {
        return 'users_index';
    }

    /**
     * @return bool
     */
    public function shouldBeSearchable(): bool
    {
        return $this->type === 'creator';
    }

    /**
     * @param $query
     * @return mixed
     */
    protected function makeAllSearchableUsing($query): mixed
    {
        return $query->with('media');
    }

    /**
     * @return array
     */
    #[ArrayShape([
        'id' => "int",
        'username' => "string",
        'full_name' => "null|string",
        'searchable_tags' => "null|string"
    ])] public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'full_name' => $this->full_name,
            'searchable_tags' => $this->searchable_tags,
        ];
    }

    /**
     * @param Media|null $media
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('avatar')
            ->fit(Manipulations::FIT_CROP, 400, 400)
            ->optimize([
                Jpegoptim::class => [
                    '--all-progressive',
                ]
            ])
            ->performOnCollections('avatars');
    }

    /**
     * @return string
     */
    public function identifiableAttribute(): string
    {
        return 'username';
    }

    /**
     * @param $query
     * @param $category
     * @return mixed
     */
    public function scopeCategory($query, $category): mixed
    {
        if($category) {
            return $query->whereHas('category', function ($categoryQuery) use ($category) {
                $categoryQuery->where('id', $category->id);
            });
        }
        return $query;
    }

    /**
     * @param $query
     * @param $username
     * @return mixed
     */
    public function scopeUsername($query, $username): mixed
    {
        return $query->where('username', $username);
    }

    /**
     * @param $query
     * @param $email
     * @return mixed
     */
    public function scopeEmail($query, $email): mixed
    {
        return $query->where('email', $email);
    }

    /**
     * @param $query
     * @param $country
     * @return mixed
     */
    public function scopeCountry($query, $country): mixed
    {
        return $query->where('country', $country);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeReviewer($query): mixed
    {
        return $query->where('type', 'reviewer');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeCreator($query): mixed
    {
        return $query->where('type', 'creator');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeFinishedSetup($query): mixed
    {
        return $query->where('has_finished_setup', true);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeIsVerified($query): mixed
    {
        return $query->whereNotNull('email_verified_at')->where(function($q){
            $q->where('fansly_verified', 1);
            $q->orWhere('patreon_verified', 1);
            $q->orWhere('twitch_verified', 1);
            $q->orWhere('youtube_verified', 1);
        });
    }

    /**
     * @param $query
     * @param $plan
     * @return mixed
     */
    public function scopePlan($query, $plan): mixed
    {
        return $query->whereHas('subscriptions', function ($query) use ($plan) {
            $query->active();
            $query->where('name', $plan);
        });
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeByRating($query): mixed
    {
        return $query
            ->addSelect(DB::raw('AVG(reviews.rating) AS avgRating'))
            ->join('reviews', 'users.id', '=', 'reviews.creator_id')
            ->orderBy('avg_rating', 'desc')
            ->groupBy('users.id');
    }

    /**
     * @return Subscription|null
     */
    public function getPlan(): Subscription|null
    {
        return $this->subscriptions()
            ->active()
            ->first();
    }

    /**
     * @return string
     */
    public function getPlanName(): string
    {
        return $this->getPlan()?->name ?? 'Basic';
    }

    /**
     * @return array
     */
    public function planTaxRates(): array
    {
        $plans = config('plans');
        $taxRates = [];

        /**
         * Creates an array in the following format:
         *
         * priceId => [taxRateId]
         * ...
         */
        foreach ($plans as $plan) {
            $monthly = $plan['monthly'];
            $yearly = $plan['yearly'];
            $taxRates[$monthly['id']] = [$monthly['tax_rate']['id']];
            $taxRates[$yearly['id']] = [$yearly['tax_rate']['id']];
        }

        return array_filter($taxRates);
    }

    /**
     * @return bool
     */
    public function isSubscriptionOnTrial(): bool
    {
        if (!$this->getPlan()) {
            return false;
        }
        return $this->getPlan()->onTrial();
    }

    /**
     * @return bool|null
     */
    public function isYearlyBillingCycle(): bool|null
    {
        if (!$this->getPlan()) {
            return false;
        }
        if ($this->getBillingCycleStart()->diffInMonths($this->getBillingCycleEnd()) > 1) {
            return true;
        }
        return false;
    }

    /**
     * @return Carbon|null
     */
    public function getBillingCycleStart(): Carbon|null
    {
        if ($this->getPlan()) {
            return Carbon::parse($this->getPlan()->asStripeSubscription()->current_period_start);
        }
        return null;
    }

    /**
     * @return Carbon|null
     */
    public function getBillingCycleEnd(): Carbon|null
    {
        if ($this->getPlan()) {
            return Carbon::parse($this->getPlan()->asStripeSubscription()->current_period_end);
        }
        return null;
    }

    /**
     * @return Carbon|null
     */
    public function getSubscriptionEndDate(): Carbon|null
    {
        if ($this->getPlan()) {
            return Carbon::parse($this->getPlan()->ends_at);
        }
        return null;
    }

    /**
     * @return bool
     */
    public function hasCanceledSubscription(): bool
    {
        if (!$this->getPlan()) {
            return false;
        }
        if (!empty($this->getSubscriptionEndDate()) && $this->getSubscriptionEndDate()->isAfter(Carbon::now())) {
            return true;
        }
        return false;
    }

    /**
     * @return Media|null
     */
    public function avatar(): Media|null
    {
        return $this->getMedia('avatars')->first();
    }


    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @return HasMany
     */
    public function writtenReviews(): HasMany
    {
        return $this->hasMany(Review::class, 'reviewer_id');
    }

    /**
     * @return HasMany
     */
    public function receivedReviews(): HasMany
    {
        return $this->hasMany(Review::class, 'creator_id')->latest();
    }

    /**
     * @return HasMany
     */
    public function favorites(): HasMany
    {
        return $this->hasMany(Favorite::class)->latest();
    }

    /**
     * @param $user
     * @return bool
     */
    public function isReviewedByUser($user): bool
    {
        $review = $this->receivedReviews->where('reviewer_id', $user->id)->first();
        if ($review) {
            return true;
        }
        return false;
    }

    /**
     * @param $user
     * @return Review|null
     */
    public function getReviewByUser($user): Review|null
    {
        return $this->receivedReviews->where('reviewer_id', $user->id)->first();
    }

    /**
     * @return string
     */
    public function getRating(): string
    {
        $rating = $this->avg_rating;
        $whole = floor($rating);
        $fraction = $rating - $whole;
        if (!$rating) {
            $rating = 3.5;
        }
        if ($rating <3.5) {
            $rating = 3.5;
        }
        if ($rating >= 5) {
            $rating = 5;
        }
        if($fraction>0 && $fraction<.5) $rating = $whole+.5;

        return number_format($rating, 2, '.', '');
    }

    /**
     * @return string
     */
    public function getRatingInText(): string
    {
        switch (round($this->getRating())) {
            case 1:
                return 'Bad';
            case 2:
                return 'Poor';
            case 3:
                return 'Average';
            case 4:
                return 'Great';
            case 5:
                return 'Excellent';
        }
    }

    /**
     * @return int[]
     */
    #[ArrayShape([
        'bad' => "float|int",
        'poor' => "float|int",
        'average' => "float|int",
        'great' => "float|int",
        'excellent' => "float|int"
    ])] public function getRatingPercentages(): array
    {
        $badCount = $this->receivedReviews
            ->where('rating', 1)
            ->count();
        $poorCount = $this->receivedReviews
            ->where('rating', 2)
            ->count();
        $averageCount = $this->receivedReviews
            ->where('rating', 3)
            ->count();
        $greatCount = $this->receivedReviews
            ->where('rating', 4)
            ->count();
        $excellentCount = $this->receivedReviews
            ->where('rating', 5)
            ->count();

        $allCount = $badCount + $poorCount + $averageCount + $greatCount + $excellentCount;

        return [
            'bad' => $badCount ? round($badCount / $allCount * 100, 2) : 0,
            'poor' => $poorCount ? round($poorCount / $allCount * 100, 2) : 0,
            'average' => $averageCount ? round($averageCount / $allCount * 100, 2) : 0,
            'great' => $greatCount ? round($greatCount / $allCount * 100, 2) : 0,
            'excellent' => $excellentCount ? round($excellentCount / $allCount * 100, 2) : 0,
        ];
    }

    /**
     * @return bool
     */
    public function isFavoritedByAuthUser(): bool
    {
        if (!Auth::check()) {
            return false;
        }
        if (Auth::user()->favorites()->where('favorite_id', $this->id)->first()) {
            return true;
        }
        return false;
    }

    /**
     * @return Review|null
     */
    public function getAuthUserReview(): Review|null
    {
        if (!Auth::check()) {
            return null;
        }
        if ($this->isReviewedByUser(Auth::user())) {
            return $this->getReviewByUser(Auth::user());
        }
        return null;
    }

    /**
     * @return string|null
     */
    public function getFormattedDateOfBirth(): string|null
    {
        if ($this->date_of_birth) {
            return $this->date_of_birth->format('Y/m/d');
        }
        return null;
    }

    /**
     * @return HasMany
     */
    public function reviewInvites(): HasMany
    {
        return $this->hasMany(ReviewInvite::class, 'creator_id');
    }

    /**
     * @return HasMany
     */
    public function monthlyReviewInvites(): HasMany
    {
        return $this->reviewInvites()
            ->where('created_at', '<=', Carbon::now()->endOf('month'));
    }

    /**
     * @return mixed
     */
    public function getInviteQuota(): mixed
    {
        return get_plan_by_name($this->getPlan()->name ?? 'Basic')['invitable_customers'];
    }

    /**
     * @return int
     */
    public function getInviteQuotaPercentage(): int
    {
        if ($this->getInviteQuota() === 'unlimited') {
            return 0;
        }
        return round($this->monthly_review_invites_count / $this->getInviteQuota() * 100, 2);
    }

    /**
     * @return bool
     */
    public function canInvite(): bool
    {
        if ($this->getInviteQuota() === 'unlimited') {
            return true;
        }
        if ($this->monthly_review_invites_count < $this->getInviteQuota()) {
            return true;
        }
        return false;
    }

    /**
     * @return string
     */
    public function getInviteUrl(): string
    {
        return URL::Route('users.view', ['username' => $this->username]);
    }

    /**
     * @param $data
     */
    public function finishSetup($data)
    {
        $this->has_finished_setup = true;
        $this->fill($data);
        $this->save();
    }

    /**
     * @param $value
     * @return string|null
     */
    public function getSearchableTagsAttribute($value): ?string
    {
        if (!is_string($value)) {
            return null;
        }
        if(!is_array(json_decode($value))){
            return null;
        }
        return implode(',', json_decode($value));
    }

    /**
     * @param $value
     */
    public function setSearchableTagsAttribute($value): void
    {
        if (is_string($value)) {
            $this->attributes['searchable_tags'] = $value;
        }
        if (is_array($value)) {
            $this->attributes['searchable_tags'] = json_encode($value);
        }
    }

    /**
     * @param $value
     */
    public function getTypeAttribute($value): ?string
    {
         return ((config('config.domain_now') == 'creator' && $this->is_creator == 1) ? "creator" : "reviewer");
    }

    public function generateVerificationCode()
    {
        $this->verification_code = 'privy-' . md5(uniqid($this->id));
        $this->save();
    }
}
