<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function verifyPromoCode(Request $request): JsonResponse
    {
        $promoCodes = config('promo_codes')['codes'];
        $promoCode = mb_strtoupper($request->code);

        if (array_key_exists($promoCode, $promoCodes)) {
            $promoCode = $promoCodes[$promoCode];

            return response()->json([
                'success' => true,
                'promo_code' => $promoCode,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Invalid code.'
        ]);
    }
}
