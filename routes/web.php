<?php

use App\Http\Controllers\PuppyController;
use App\Models\Puppy;
use App\Http\Resources\PuppyResource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [PuppyController::class, 'index'])->name('home');
// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//         'puppies' => PuppyResource::collection(Puppy::get()->load(['user', 'likedBy'])),
//     ]);
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    // Update Liked Puppy
    Route::patch('puppies/{puppy}/like', [PuppyController::class, 'like'])->name('puppies.like');

    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
