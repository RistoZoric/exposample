<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "rating" => 4,
            "description" => $this->faker->text,
            "title" => $this->faker->name,
            "status" => "published",
            "is_verified" => "1",
            "response" =>$this->faker->text,
            "flag_reason" => "",
            "platform" => "",
        ];
    }
}
