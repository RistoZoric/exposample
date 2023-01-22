<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Exception;

class ResetCategoryClicks extends Command
{
    protected $signature = 'categories:reset-clicks';

    protected $description = 'Reset daily stats.';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        try {
            DB::table('categories')->update(['24_hour_clicks' => 0]);
            $this->info('Category clicks reset.');
        } catch (Exception $exception) {
            $this->error('Category clicks failed to reset.');
            $this->error($exception->getMessage());
        }
    }
}
