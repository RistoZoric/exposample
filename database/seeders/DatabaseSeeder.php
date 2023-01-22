<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = [];
        $admin = \App\Models\User::create([
            "full_name" => "Admin",
            "username" => "admin",
            "email" => "admin@gmail.com",
            "onlyfans_verified" => 0,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            "phone_number" => 9999888877,
            "is_admin" => 1,
        ]);
        $users[] = \App\Models\User::create([
            "full_name" => "Test1",
            "username" => "test1",
            "email" => "test1@gmail.com",
            "onlyfans_verified" => 0,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            "phone_number" => 9999888877,
            "is_admin" => 0,
        ]);
        $users[] = \App\Models\User::create([
            "full_name" => "Test2",
            "username" => "test2",
            "email" => "test2@gmail.com",
            "onlyfans_verified" => 0,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            "phone_number" => 9999888877,
            "is_admin" => 0,
        ]);
        $users[] = \App\Models\User::create([
            "full_name" => "Test3",
            "username" => "test3",
            "email" => "test3@gmail.com",
            "onlyfans_verified" => 0,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            "phone_number" => 9999888877,
            "is_admin" => 0,
        ]);


        // create reviews
        \App\Models\Review::factory(20)->create([
            "reviewer_id"=> $admin->id,
            "creator_id"=> \App\Models\User::inRandomOrder()->first()->id
        ]);

        // create blog
        \App\Models\BlogPost::factory(8)->create();
    }
}
