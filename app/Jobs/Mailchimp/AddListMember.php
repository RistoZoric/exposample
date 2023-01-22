<?php

namespace App\Jobs\Mailchimp;

use App\Services\MailchimpService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;

class AddListMember implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable;

    protected string $emailAddress;
    protected array $tags;
    protected string $status;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $emailAddress, array $tags, $status = 'subscribed')
    {
        $this->emailAddress = $emailAddress;
        $this->tags = $tags;
        $this->status = $status;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        MailchimpService::addListMember($this->emailAddress, $this->tags, $this->status);
    }
}
