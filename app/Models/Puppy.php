<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;

class Puppy extends Model
{

    protected $fillable = [
        'name', 'trait', 'image_url',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function likedBy(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'puppy_user');
    }

    protected static function booted()
    {
        static::deleting(function ($puppy) {
            Storage::disk('public')->delete(Storage::url($puppy->image_url));
        });

    }
}
