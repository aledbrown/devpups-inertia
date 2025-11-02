<?php

namespace Database\Seeders;

use App\Models\Puppy;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class PuppySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $puppies = [
            ['name' => 'Frisket', 'trait' => 'Mother of all pups', 'image' => '1.jpg'],
            ['name' => 'Chase', 'trait' => 'Very good boi', 'image' => '2.jpg'],
            ['name' => 'Leia', 'trait' => 'Enjoys naps', 'image' => '3.jpg'],
            ['name' => 'Pupi', 'trait' => 'Loves cheese', 'image' => '4.jpg'],
            ['name' => 'Russ', 'trait' => 'Ready to save the world', 'image' => '5.jpg'],
            ['name' => 'Yoko', 'trait' => 'Ready for anything', 'image' => '6.jpg'],
            ['name' => 'Buddy', 'trait' => 'Loves belly rubs', 'image' => '7.jpg'],
            ['name' => 'Milo', 'trait' => 'Zoomies expert', 'image' => '8.jpg'],
            ['name' => 'Luna', 'trait' => 'Treat connoisseur', 'image' => '9.jpg'],
            ['name' => 'Max', 'trait' => 'Nap champion', 'image' => '10.jpg'],
            ['name' => 'Bella', 'trait' => 'Squeaky toy hunter', 'image' => '11.jpg'],
            ['name' => 'Rocky', 'trait' => 'Tail wag specialist', 'image' => '12.jpg'],
            ['name' => 'Coco', 'trait' => 'Fence inspector', 'image' => '13.jpg'],
            ['name' => 'Duke', 'trait' => 'Postman greeter', 'image' => '14.jpg'],
            ['name' => 'Lucy', 'trait' => 'Ball retriever', 'image' => '15.jpg'],
            ['name' => 'Bailey', 'trait' => 'Sock collector', 'image' => '16.jpg'],
            ['name' => 'Zoe', 'trait' => 'Couch cuddler', 'image' => '17.jpg'],
            ['name' => 'Charlie', 'trait' => 'Park explorer', 'image' => '18.jpg'],
            ['name' => 'Sadie', 'trait' => 'Sunbeam surfer', 'image' => '19.jpg'],
            ['name' => 'Toby', 'trait' => 'Puddle jumper', 'image' => '20.jpg'],
            ['name' => 'Nala', 'trait' => 'Snack negotiator', 'image' => '21.jpg'],
            ['name' => 'Ollie', 'trait' => 'Squirrel analyst', 'image' => '22.jpg'],
            ['name' => 'Penny', 'trait' => 'Freestyle howler', 'image' => '1.jpg'],
            ['name' => 'Mocha', 'trait' => 'Ear flop model', 'image' => '2.jpg'],
            ['name' => 'Rex', 'trait' => 'Shadow chaser', 'image' => '3.jpg'],
            ['name' => 'Ruby', 'trait' => 'Car ride fan', 'image' => '4.jpg'],
            ['name' => 'Finn', 'trait' => 'Blanket burrower', 'image' => '5.jpg'],
            ['name' => 'Maggie', 'trait' => 'Rain walker', 'image' => '6.jpg'],
            ['name' => 'Zephyr', 'trait' => 'Cloud watcher', 'image' => '7.jpg'],
            ['name' => 'Harley', 'trait' => 'Adventure seeker', 'image' => '8.jpg'],
            ['name' => 'Phoebe', 'trait' => 'Butterfly chaser', 'image' => '9.jpg'],
            ['name' => 'Gizmo', 'trait' => 'Gadget inspector', 'image' => '10.jpg'],
            ['name' => 'Pepper', 'trait' => 'Spice of life', 'image' => '11.jpg'],
            ['name' => 'Scout', 'trait' => 'Trail blazer', 'image' => '12.jpg'],
            ['name' => 'Winnie', 'trait' => 'Honey enthusiast', 'image' => '13.jpg'],
            ['name' => 'Nova', 'trait' => 'Star gazer', 'image' => '14.jpg'],
            ['name' => 'Jasper', 'trait' => 'Gem collector', 'image' => '15.jpg'],
            ['name' => 'Kona', 'trait' => 'Coffee lover', 'image' => '16.jpg'],
            ['name' => 'Marley', 'trait' => 'Music appreciator', 'image' => '17.jpg'],
            ['name' => 'Hazel', 'trait' => 'Nut gatherer', 'image' => '18.jpg'],
            ['name' => 'Baxter', 'trait' => 'Gentleman scholar', 'image' => '19.jpg'],
            ['name' => 'Piper', 'trait' => 'Melody maker', 'image' => '20.jpg'],
            ['name' => 'Atlas', 'trait' => 'World explorer', 'image' => '21.jpg'],
            ['name' => 'Indie', 'trait' => 'Free spirit', 'image' => '22.jpg'],
            ['name' => 'Boomer', 'trait' => 'Thunder lover', 'image' => '1.jpg'],
            ['name' => 'Cleo', 'trait' => 'Royal demeanor', 'image' => '2.jpg'],
            ['name' => 'Ace', 'trait' => 'Top dog', 'image' => '3.jpg'],
            ['name' => 'Remy', 'trait' => 'Chef assistant', 'image' => '4.jpg'],
            ['name' => 'Blu', 'trait' => 'Ocean dreamer', 'image' => '5.jpg'],
            ['name' => 'Goose', 'trait' => 'Silly goose', 'image' => '6.jpg'],
            ['name' => 'Pixie', 'trait' => 'Magical sprite', 'image' => '7.jpg'],
            ['name' => 'Mochi', 'trait' => 'Sweet and soft', 'image' => '8.jpg'],
            ['name' => 'Otis', 'trait' => 'Elevator operator', 'image' => '9.jpg'],
            ['name' => 'Mabel', 'trait' => 'Mystery solver', 'image' => '10.jpg'],
            ['name' => 'Waffles', 'trait' => 'Breakfast buddy', 'image' => '11.jpg'],
            ['name' => 'Simba', 'trait' => 'Lion hearted', 'image' => '12.jpg'],
            ['name' => 'Peaches', 'trait' => 'Sweet as pie', 'image' => '13.jpg'],
            ['name' => 'Pumpkin', 'trait' => 'Fall favorite', 'image' => '14.jpg'],
            ['name' => 'Onyx', 'trait' => 'Midnight runner', 'image' => '15.jpg'],
            ['name' => 'Misty', 'trait' => 'Morning fog dancer', 'image' => '16.jpg'],
            ['name' => 'Riley', 'trait' => 'Life of the party', 'image' => '17.jpg'],
            ['name' => 'Skye', 'trait' => 'High flyer', 'image' => '18.jpg'],
            ['name' => 'Shadow', 'trait' => 'Silent follower', 'image' => '19.jpg'],
            ['name' => 'Koda', 'trait' => 'Little bear', 'image' => '20.jpg'],
            ['name' => 'Maverick', 'trait' => 'Rule breaker', 'image' => '21.jpg'],
            ['name' => 'Harper', 'trait' => 'Harp player', 'image' => '22.jpg'],
            ['name' => 'Echo', 'trait' => 'Voice repeater', 'image' => '1.jpg'],
            ['name' => 'Storm', 'trait' => 'Weather maker', 'image' => '2.jpg'],
            ['name' => 'Aspen', 'trait' => 'Mountain climber', 'image' => '3.jpg'],
            ['name' => 'Bentley', 'trait' => 'Luxury lover', 'image' => '4.jpg'],
            ['name' => 'Cosmo', 'trait' => 'Space cadet', 'image' => '5.jpg'],
            ['name' => 'Diesel', 'trait' => 'Power house', 'image' => '6.jpg'],
            ['name' => 'Enzo', 'trait' => 'Race car driver', 'image' => '7.jpg'],
            ['name' => 'Freya', 'trait' => 'Norse goddess', 'image' => '8.jpg'],
            ['name' => 'Goji', 'trait' => 'Berry picker', 'image' => '9.jpg'],
            ['name' => 'Harlow', 'trait' => 'Hollywood star', 'image' => '10.jpg'],
            ['name' => 'Ivy', 'trait' => 'Wall climber', 'image' => '11.jpg'],
            ['name' => 'Juno', 'trait' => 'Queen of heaven', 'image' => '12.jpg'],
            ['name' => 'Kiwi', 'trait' => 'Fuzzy fruit', 'image' => '13.jpg'],
            ['name' => 'Loki', 'trait' => 'Mischief maker', 'image' => '14.jpg'],
            ['name' => 'Maple', 'trait' => 'Syrup lover', 'image' => '15.jpg'],
            ['name' => 'Niko', 'trait' => 'Victory bringer', 'image' => '16.jpg'],
            ['name' => 'Olive', 'trait' => 'Peace keeper', 'image' => '17.jpg'],
            ['name' => 'Poppy', 'trait' => 'Flower child', 'image' => '18.jpg'],
            ['name' => 'Quincy', 'trait' => 'Fifth element', 'image' => '19.jpg'],
            ['name' => 'River', 'trait' => 'Flow master', 'image' => '20.jpg'],
            ['name' => 'Sasha', 'trait' => 'Defender of all', 'image' => '21.jpg'],
            ['name' => 'Theo', 'trait' => 'Gift from above', 'image' => '22.jpg'],
            ['name' => 'Uma', 'trait' => 'Tranquility seeker', 'image' => '1.jpg'],
            ['name' => 'Violet', 'trait' => 'Purple reign', 'image' => '2.jpg'],
            ['name' => 'Willow', 'trait' => 'Tree hugger', 'image' => '3.jpg'],
            ['name' => 'Xena', 'trait' => 'Warrior princess', 'image' => '4.jpg'],
            ['name' => 'Yuki', 'trait' => 'Snow dancer', 'image' => '5.jpg'],
            ['name' => 'Zara', 'trait' => 'Princess of hearts', 'image' => '6.jpg'],
            ['name' => 'Archie', 'trait' => 'Bold and brave', 'image' => '7.jpg'],
            ['name' => 'Bear', 'trait' => 'Big hugger', 'image' => '8.jpg'],
            ['name' => 'Copper', 'trait' => 'Shiny penny', 'image' => '9.jpg'],
            ['name' => 'Dash', 'trait' => 'Speed demon', 'image' => '10.jpg'],
            ['name' => 'Ember', 'trait' => 'Fire starter', 'image' => '11.jpg'],
            ['name' => 'Fable', 'trait' => 'Story teller', 'image' => '12.jpg'],
            ['name' => 'Goober', 'trait' => 'Silly billy', 'image' => '13.jpg'],
            ['name' => 'Honey', 'trait' => 'Sweetness overload', 'image' => '14.jpg'],
            ['name' => 'Iggy', 'trait' => 'Rock star', 'image' => '15.jpg'],
        ];

        $user = User::first();

        foreach ($puppies as $puppy) {
            Puppy::create([
                'user_id' => $user->id,
                'name' => $puppy['name'],
                'trait' => $puppy['trait'],
                'image_url' => Storage::url('puppies/'.$puppy['image']),
            ]);
        }

    }
}
