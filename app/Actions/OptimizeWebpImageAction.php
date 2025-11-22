<?php

namespace App\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class OptimizeWebpImageAction
{
    /**
     * @param  UploadedFile  $file
     *
     * @return array
     */
    public function handle(UploadedFile $file): array
    {
        // Image optimisation
        $image = Image::read($file);

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
