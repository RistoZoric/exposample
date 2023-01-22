<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class ZendeskController extends Controller
{
    /**
     * @param string $email
     * @return JsonResponse
     */
    public function verifySubscriber(string $email): JsonResponse
    {
        $user = User::email($email)->firstOrFail();

        $isSubscribed = false;
        if ($plan = $user->getPlan()) {
            $isSubscribed = true;
        }

        return response()->json([
            'plan' => $plan->name ?? 'Basic',
            'subscribed' => $isSubscribed,
        ]);
    }
}
