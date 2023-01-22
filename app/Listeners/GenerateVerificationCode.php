<?php

namespace App\Listeners;

use App\Events\Registered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class GenerateVerificationCode implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(Registered $event)
    {
        $event->user->generateVerificationCode();
    }
}
