<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SetupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => 'required|string',
            'category_id' => 'required|exists:categories,id|numeric',
            'onlyfans_username' => 'nullable|string',
            'fansly_username' => 'nullable|string',
            'patreon_username' => 'nullable|string',
            'twitch_username' => 'nullable|string',
            'youtube_username' => 'nullable|string',
            'kickstarter_username' => 'nullable|string',
            'soundcloud_username' => 'nullable|string',
        ];
    }
}
