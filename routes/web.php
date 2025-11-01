<?php

use App\Models\Puppy;
use App\Http\Resources\PuppyResource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        // 'puppies' => Puppy::get()->load(['user']),
        'puppies' => PuppyResource::collection(Puppy::get()->load(['user'])),

    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
