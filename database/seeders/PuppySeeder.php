<?php

namespace Database\Seeders;

use App\Models\Puppy;
use App\Models\User;
use Illuminate\Database\Seeder;

class PuppySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $user = User::first();

        Puppy::create([
            'name' => 'Frisket',
            'trait' => 'Mother of all pups',
            'image_url' => '/images/1.jpg',
            'user_id' => $user->id,
        ]);

        Puppy::create([
            'name' => 'Chase',
            'trait' => 'Very good boi',
            'image_url' => '/images/2.jpg',
            'user_id' => $user->id,
        ]);

        Puppy::create([
            'name' => 'Leia',
            'trait' => 'Enjoys naps',
            'image_url' => '/images/3.jpg',
            'user_id' => $user->id,
        ]);

        Puppy::create([
            'name' => 'Pupi',
            'trait' => 'Loves cheese',
            'image_url' => '/images/4.jpg',
            'user_id' => $user->id,
        ]);

        Puppy::create([
            'name' => 'Russ',
            'trait' => 'Ready to save the world',
            'image_url' => '/images/5.jpg',
            'user_id' => $user->id,
        ]);

        Puppy::create([
            'name' => 'Yoko',
            'trait' => 'Ready for anything',
            'image_url' => '/images/6.jpg',
            'user_id' => $user->id,
        ]);

    }
}
