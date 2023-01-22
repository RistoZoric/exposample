<?php

namespace App\Mail;

use App\Services\UserService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendReviewInvite extends Mailable implements ShouldQueue
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
        return $this->view('emails.review-invite')
            ->subject('Review Invitation from Privy')
            ->with($this->data);
    }
}
