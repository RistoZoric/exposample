<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class ReviewRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    #[ArrayShape(['rating' => "string", 'platform' => "string", 'title' => "string", 'description' => "string"])] public function rules(): array
    {
        return [
            'rating' => 'required|numeric|min:1|max:5',
            'platform' => 'required|string',
            'title' => 'required|string',
            'description' => 'required|string',
        ];
    }
}
