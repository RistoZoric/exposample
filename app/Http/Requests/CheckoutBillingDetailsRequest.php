<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class CheckoutBillingDetailsRequest extends FormRequest
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
    #[ArrayShape([
        'plan_name' => "string",
        'plan_price' => "string",
        'plan_price.id' => "string",
        'plan_price.tax_rate' => "string",
        'plan_price.tax_rate.id' => "string",
        'plan_price.tax_rate.percentage' => "string",
        'plan_price.value' => "string"
    ])] public function rules(): array
    {
        return [
            'plan_name' => 'required|string',
            'plan_price' => 'required',
            'plan_price.id' => 'required|string',
            'plan_price.tax_rate' => 'required|array',
            'plan_price.tax_rate.id' => 'required|string',
            'plan_price.tax_rate.percentage' => 'required|numeric',
            'plan_price.value' => 'required|numeric',
        ];
    }
}
