<?php

namespace App\Observers;

use App\Events\Registered;
use App\Models\User;

class UserObserver
{
    public function created(User $user)
    {
//        $user = User::find(1006);
//        Registered::dispatch($user);
    }
}
