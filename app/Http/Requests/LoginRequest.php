<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use JetBrains\PhpStorm\ArrayShape;

class LoginRequest extends FormRequest
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
    #[ArrayShape(['email' => "string", 'password' => "string", 'back' => "string",'wrong_user','sign_url'])] 
    public function rules(): array
    {
        return [
            'email' => 'required',
            'password' => 'required|string',
            'back' => 'sometimes|string',
        ];
    }

    public function messages()
    {
        return [ 
            'email.required' => 'Please enter your email address',
            'password.required' => 'Please enter your password', 
        ];
    }
}
 