<?php

namespace App\Actions;

use Illuminate\Http\UploadedFile;
use Intervention\Image\Laravel\Facades\Image;

class OptimizeWebpImageAction
{
    /**
     * @param  UploadedFile  $file
     *
     * @return string
     */
    public function handle(UploadedFile $file): string
    {
        // Image optimisation
        $image = Image::read($file);

        // Scale down only when 1000 pix wide
        if ($image->width() > 1000) {
            $image->scale(width: 1000);
        }

        // Convert to WEBP format
        return $image->toWebp(quality: 95)->toString();
    }
}
