<?php

namespace App\Utilities;

class SettingUtility
{
    public static function defaultFeaturedCreatorUsernames(): array
    {
        $usernames = explode(',', nova_get_setting('default_featured_creators'));

        return array_map(fn($username) => trim($username), $usernames);
    }
}
