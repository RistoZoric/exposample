<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import a copy of the live database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     */
    public function handle()
    {
        DB::unprepared(file_get_contents('storage/database/privy_blog_posts.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_categories.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_category_translations.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_users.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_media.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_reviews.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_review_invites.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_review_usefuls.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_subscription_items.sql'));
        DB::unprepared(file_get_contents('storage/database/privy_subscriptions.sql'));
    }
}
