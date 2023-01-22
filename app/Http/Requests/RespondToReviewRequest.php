<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class RespondToReviewRequest extends FormRequest
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
    #[ArrayShape(['id' => "string", 'response' => "string"])] public function rules(): array
    {
        return [
            'id' => 'required|exists:reviews,id',
            'response' => 'required|string',
        ];
    }
}
