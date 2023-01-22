<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class UserAuthResource extends JsonResource
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
            'email' => $this->email,
            'gender' => $this->gender,
            'phone_number' => $this->phone_number,
            'date_of_birth' => $this->getFormattedDateOfBirth(),
            'country' => $this->country,
            'type' => $this->type,
            'category' => $this->category,
            'verification_code' => $this->verification_code,
            'written_reviews_count' => $this->written_reviews_count,
            'category_id' => $this->category_id,
            'description' => $this->description,
            'searchable_tags' => $this->searchable_tags,
            'favorites' => FavoriteResource::collection($this->favorites),
            'rating' => $this->getRating(),
            'rating_text' => $this->getRatingInText(),
            'rating_percentages' => $this->getRatingPercentages(),
            'payment_method' => $this->getPlan() ? $this->defaultPaymentMethod() : null,
            'plan' => $this->getPlan(),
            'billing_cycle_start' => $this->getPlan() ? $this->getBillingCycleStart()->format('F jS, Y') : null,
            'billing_cycle_end' => $this->getPlan() ? $this->getBillingCycleEnd()->format('F jS, Y') : null,
            'has_canceled' => $this->hasCanceledSubscription(),
            'is_trialing' => $this->isSubscriptionOnTrial(),
            'is_yearly' => $this->isYearlyBillingCycle(),
            'monthly_review_invites_count' => $this->monthly_review_invites_count,
            'review_invites' => $this->reviewInvites,
            'invite_quota' => $this->getInviteQuota(),
            'invite_quota_percentage' => $this->getInviteQuotaPercentage(),
            'can_invite' => $this->canInvite(),
            'invite_url' => $this->getInviteUrl(),
            'onlyfans_verified' => $this->onlyfans_verified,
            'patreon_verified' => $this->onlyfans_verified,
            'twitch_verified' => $this->onlyfans_verified,
            'youtube_verified' => $this->onlyfans_verified,
            'kickstarter_verified' => $this->onlyfans_verified,
            'fansly_verified' => $this->onlyfans_verified,
            'onlyfans_username' => $this->onlyfans_username,
            'fansly_username' => $this->fansly_username,
            'patreon_username' => $this->patreon_username,
            'twitch_username' => $this->twitch_username,
            'youtube_username' => $this->youtube_username,
            'kickstarter_username' => $this->kickstarter_username,
            'soundcloud_username' => $this->soundcloud_username,
            'is_verified' => $this->is_verified,
            'is_email_verified' => (!is_null($this->email_verified_at) ? true : false),
        ];
    }
}
