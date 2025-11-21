<?php

namespace App\Http\Resources;

use App\Models\Puppy;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Puppy */
class LikedPuppiedResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'trait' => $this->trait,
            'imageUrl' => $this->image_url,
            // 'likedBy' => '',
            // 'user' => UserResource::make($this->whenLoaded('user')),

            // 'id' => $this->id,
            // 'name' => $this->name,
            // 'trait' => $this->trait,
            // 'image_url' => $this->image_url,
            // 'created_at' => $this->created_at,
            // 'updated_at' => $this->updated_at,
            // 'liked_by_count' => $this->liked_by_count,
            // 'likedBy_count' => $this->likedBy_count,
            // 'user_id' => $this->user_id,
        ];
    }
}
