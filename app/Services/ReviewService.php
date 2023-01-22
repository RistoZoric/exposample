<?php

namespace App\Services;

use App\Models\User;
use App\Models\Review;
use Illuminate\Support\Facades\DB;

class ReviewService
{
    protected Review $review;

    public function __construct(Review $review)
    {
        $this->review = $review; 
    }

    public function getRecentReviews($limit)
    {
        return $this->review
            ->with(['reviewer.media', 'creator'])
            ->hasTitle()
            ->hasDescription()
            ->latest()
            ->limit($limit)
            ->get();
    }

    public function getHighlightedReview($limit = 1)
    {
        return $this->review
            ->hasTitle()
            ->hasDescription()
            ->inRandomOrder()
            ->limit($limit)->get();
    }

    /**
     * @param User $creator
     * @param User $reviewer
     * @param array $attributes
     * @param bool $isVerified
     * @return Review
     */
     public function create(
        User $creator,
        User $reviewer,
        array $attributes,
        bool $isVerified
    ): Review {
        
        $reviewUpdated = $this->review->updateOrCreate(
            [
                'creator_id' => $creator->id,
                'reviewer_id' => $reviewer->id,
            ],
            [
                'rating' => $attributes['rating'],
                'platform' => $attributes['platform'],
                'title' => $attributes['title'],
                'description' => $attributes['description'],
                'is_verified' => $isVerified,
            ]);

         
        if($reviewUpdated){
            $c = Review::groupBy('creator_id')->select('creator_id', DB::raw('count(rating) as num'))->orderBy('num','ASC')->get();
            $index = ceil(count($c)*.25);
            $c = $c?$c->all()[$index]->num:1;
            $m = Review::all()->avg('rating');
            $existingReviewsCount = Review::where('creator_id', $creator->id)->count();
            $existingReviewsSum = Review::where('creator_id', $creator->id)->sum('rating');
            $creatorRatingAvg = ($existingReviewsSum/$existingReviewsCount);
            $avg_rating = (($creatorRatingAvg*$existingReviewsCount+$c*$m)/($existingReviewsCount+$c));
            $avg_rating = $avg_rating>3.5?round($avg_rating, 2):3.5;
            // $avg_rating = ((10 * 3) + $existingReviewsSum) / (10 + $existingReviewsCount);
            if(User::where('id', $creator->id)->update(['avg_rating' => $avg_rating])){
                return $reviewUpdated;
            }
        }else{
            return false;
        }
    }
}