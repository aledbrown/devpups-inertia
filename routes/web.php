<?php

use App\Http\Controllers\PuppyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PuppyController::class, 'index'])->name('home');

// AUTH PROTECTED ROUTES
Route::middleware(['auth', 'verified'])->group(function () {
    // Update Liked Puppy
    Route::patch('puppies/{puppy}/like', [PuppyController::class, 'like'])->name('puppies.like');

    Route::post('puppies', [PuppyController::class, 'store'])->name('puppies.store');

    // Dashboard
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
