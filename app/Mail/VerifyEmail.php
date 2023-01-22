<?php

namespace App\Mail;

use App\Services\UserService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;


    protected $data = null;
    public function __construct($data)
    {
        $this->data = $data;
    }
    
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): static
    {
        $this->data['creators'] = app(UserService::class)
            ->getFeaturedCreators();

        return $this->view('emails.verify-email')
            ->subject('Verify your Privy account')
            ->with($this->data);
    }
}
