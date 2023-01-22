<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\VerifyEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailVerificationNotification implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(Registered $event)
    {
        Mail::to($event->user)->send(new VerifyEmail);
    }
}
