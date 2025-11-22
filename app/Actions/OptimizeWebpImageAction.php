<?php

namespace App\Actions;

use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class OptimizeWebpImageAction
{
    public function handle(string $input): array
    {
        // Image optimisation
        $image = Image::read($input);

        // Scale down only when 1000 pix wide
        if ($image->width() > 1000) {
            $image->scale(width: 1000);
        }

        // Convert to WEBP format
        $encoded = $image->toWebp(quality: 95)->toString();

        // Create a random filename
        $filename = Str::random().'.webp';

        return [
            'fileName' => $filename,
            'webpString' => $encoded,
        ];

    }
}
