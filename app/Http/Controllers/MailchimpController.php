<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use MailchimpMarketing\ApiClient;
use MailchimpMarketing\ApiException;

class MailchimpController extends Controller
{
    protected ApiClient $mailchimp;

    public function __construct()
    {
        $this->mailchimp = new ApiClient();

        $this->mailchimp->setConfig([
            'apiKey' => config('mailchimp.api_key'),
            'server' => config('mailchimp.server')
        ]);
    }

    /**
     * @param Request $request
     
     */
    public function subscribe(Request $request)
    {
        try {
            
            // $this->mailchimp->lists
            //     ->setListMember(config('mailchimp.list_id'), md5(strtolower($request->email)), [
            //         'email_address' => $request->email,
            //         'status_if_new' => 'subscribed',
            //     ]);
            $handle = fopen("emails.csv", "a+");
            fputcsv($handle,[ $request->email]);
            fclose($handle);
            // toast()
            //     ->success('You have successfully subscribed to our newsletter.')
            //     ->push();
            return redirect()->route('pages.home')->with('message','You have successfully subscribed to our newsletter.');
        } catch (ApiException $exception) {
            return response()->json([
                'toast' => [
                    'status' => 'error',
                    'title' => 'Oops!',
                    'description' => 'An error occurred. Please, try again later..'
                ]
            ]);
        }
    }
}
 