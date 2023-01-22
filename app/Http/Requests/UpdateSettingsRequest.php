<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use JetBrains\PhpStorm\ArrayShape;

class UpdateSettingsRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    { 
        return true;
    }
   

    
    #[ArrayShape([
        'avatar' => "string",
        'username' => "array",
        //'gender' => "string",
        //'date_of_birth' => "string",
        'country' => "string",
        'email' => "array",
         'full_name' => "string",
        'type' => "string",
        'category_id' => "string",
        'description' => "string",
        'searchable_tags' => "string",
        'password' => "string"
    ])] 
public function rules(): array
    { 
        $userType = $this->user()->type;

        if($userType === 'creator'){

            return [
                'avatar' => 'nullable|string',
                'username' => [
                    'required',
                    'string',
                    'max:128',
                    Rule::unique('users')->ignore($this->user()->id)
                ],
                // 'gender' => 'required|string',
                // 'date_of_birth' => 'required|date',
                'country' => 'required|string',
                'email' => [
                    'required',
                    'email', 
                    Rule::unique('users')->ignore($this->user()->id),
                ],
                 'full_name' => 'required|string',
                'type' => 'required|string',
                'category_id' => 'required_if:type,==,creator|nullable|numeric|exists:categories,id',
                'description' => 'required_if:type,==,creator|nullable|string|max:' . get_plan_by_name($this->user()->getPlan()->name ?? 'Basic')['description_length'],
                'searchable_tags' => 'required_if:type,==,creator|nullable|array|max:' . get_plan_by_name($this->user()->getPlan()->name ?? 'Basic')['searchable_tags'],
                'password' => 'nullable|string|min:7',
            ];

        }else{

            return [
                'avatar' => 'nullable|string',
                // 'username' => [
                //     'required',
                //     'string',
                //     'max:128',
                //     Rule::unique('users')->ignore($this->user()->id)
                // ],
                // 'gender' => 'required|string',
                // 'date_of_birth' => 'required|date',
                'country' => 'required|string',
                'email' => [
                    'required',
                    'email',
                    Rule::unique('users')->ignore($this->user()->id),
                ],
                'full_name' => 'required|string',
               // 'type' => 'required|string',
               // 'category_id' => 'required_if:type,==,creator|nullable|numeric|exists:categories,id',
                //'description' => 'required_if:type,==,creator|nullable|string|max:' . get_plan_by_name($this->user()->getPlan()->name ?? 'Basic')['description_length'],
                //'searchable_tags' => 'required_if:type,==,creator|nullable|array|max:' . get_plan_by_name($this->user()->getPlan()->name ?? 'Basic')['searchable_tags'],
                'password' => 'nullable|string|min:7',
            ];

        }
        
    }

    protected function prepareForValidation()
    {
        $this->merge(['searchable_tags' => explode(',', $this->searchable_tags)]);
    }
}
