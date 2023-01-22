<?php

namespace App\Utilities;

use App\Models\User;
use Illuminate\Support\Collection;

class EmailUtility
{
    public static function getVerificationEmailCreators(): Collection
    {
        $usernames = explode(',', nova_get_setting('verification_email_creators'));

        return User::whereIn(
            'username',
            array_map(fn($item) => trim($item), $usernames)
        )->get();
    }
}
