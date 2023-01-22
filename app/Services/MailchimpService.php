<?php

namespace App\Services;

use MailchimpMarketing\ApiClient;

class MailchimpService
{
    static ApiClient $mailchimp;

    public static function getMailchimpClient(): ApiClient
    {
        $client = new ApiClient();

        $client->setConfig([
            'apiKey' => config('mailchimp.api_key'),
            'server' => config('mailchimp.server')
        ]);

        return $client;
    }

    public static function getLists()
    {
        return self::getMailchimpClient()->lists->getAllLists();
    }

    public static function tagSearch()
    {
        return self::getMailchimpClient()->lists->tagSearch(config('mailchimp.list_id'));
    }

    public static function addListMember(string $emailAddress, array $tags, string $status)
    {
//        return self::getMailchimpClient()->lists->addListMember(config('mailchimp.list_id'), [
//            'email_address' => $emailAddress,
//            'status' => $status,
//            'tags' => $tags,
//        ]);
    }
}
