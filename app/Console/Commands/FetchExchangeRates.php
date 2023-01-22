<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redis;
use Exception;

class FetchExchangeRates extends Command
{
    protected $signature = 'exchange-rates:fetch';

    protected $description = 'Fetch the latest exchange rates from Open Exchange Rates.';

    protected string $apiUrl = 'https://openexchangerates.org/api/latest.json?base=usd';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        try {
            $response = Http::get($this->apiUrl . '&app_id=' . config('open-exchange-rates.app_id'))
                ->json();
            Redis::set('exchange_rates', json_encode($response['rates']));
            $this->info('Fetched exchange rates.');
            dump($response['rates']);
        } catch (Exception $exception) {
            $this->error('Exchange rates failed to fetch.');
            $this->error($exception->getMessage());
        }
    }
}
