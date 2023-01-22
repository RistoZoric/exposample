<?php

namespace App\Services;

use App\Models\User;
use App\Models\ReviewInvite;
use App\Utilities\SettingUtility;
use Illuminate\Support\Collection;

class UserService
{
    protected User $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * @param int $id
     * @return User|null
     */
    public function getCreatorById(int $id): ?User
    {
        return $this->user->creator()
            ->where('id', $id)
            ->first();
    }

    /**
     * @param string $username
     * @return User|null
     */
    public function getCreatorByUsername(string $username): ?User
    {
        return $this->user->creator()
            ->username($username)
            ->first();
    }

    /**
     * @param int $limit
     * @return Collection|null
     */
    public function getFeaturedCreators(int $limit = 4): ?Collection
    {
        $creators = $this->user->creator()
            ->plan('Premium')
            ->inRandomOrder();

        if (!$creators->count()) {
            $creators = $this->user->creator()
                ->whereIn(
                    'username',
                    SettingUtility::defaultFeaturedCreatorUsernames(),
                );
        }

        return $creators
            ->limit($limit)
            ->get();
    }

    /**
     * @return Collection|null
     */
    public function getSuggestedCreators(): ?Collection
    {
        return $this->user->creator()
            ->limit(3)
            ->inRandomOrder()
            ->get();
    }

     /**
     * @param int $id
     * @return User|null
     */
    public function getCreatorByInviteId(int $id): ?User
    {
        $invite = ReviewInvite::find($id);
        if(!empty($invite) && !empty($invite->creator_id)){
            return $this->user->creator()
                ->where('id', $invite->creator_id)
                ->first();
        }
        return null;
    }
}
