<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(6, true);
        return [
            "slug" => $this->faker->slug,
            "title" => $title,
            "body" => $this->faker->realText($this->faker->numberBetween(100,200)),
            "author_name" => $this->faker->name,
            "meta_title" => $title,
            "meta_description" => $title,
            "meta_keywords" => $title
        ];
    }
}
