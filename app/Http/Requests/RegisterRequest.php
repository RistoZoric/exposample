<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class RegisterRequest extends FormRequest
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
        'username' => "string",
        'email' => "string",
        'password' => "string",
        'type' => "string",
        'accept_tos' =>'string',
        'patreon_verified' => "string",
        "patreon_username" => "string"
    ])] 
    public function rules(): array
    {
        return [
            'username' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|confirmed|string|min:7',
            'accept_tos' =>'required|in:on',
            'type' => 'nullable|string',
            'patreon_verified' => 'nullable|string',
            'patreon_username' => 'nullable|string',
        ];
    }
    public function messages()
    {
        return [
            'username.required' => 'Please enter your username',
            'email.required' => 'Please enter your email address',
            'password.required' => 'Please enter your password',
            'accept_tos.required' => 'You must accept the terms and conditions', 
        ];
    }
}
 