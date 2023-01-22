<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class CheckoutFinishRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return string[]
     */
    public function rules(): array
    {
        return [
            'plan_name' => 'required|string',
            'plan_price' => 'required|string',
            'promo_code' => 'nullable|string',

            'full_name' => 'required|string',
            'email' => 'required|email',
            'phone_number' => 'required|string',
            'line1' => 'required|string',
            'city' => 'required|string',
            'postal_code' => 'required|string',
            'country' => 'required|string|in:' . implode(',', array_keys(config('countries'))),
            'payment_method' => 'required|array',
        ];
    }
}
