import React, { useMemo } from 'react';

// component to preview image upload
export function ImageUploadPreview({
    image,
    alt,
    className,
}: {
    image: File | string | null;
    alt: string;
    className?: string;
}) {
    const imageUrl = useMemo(() => {
        if (image instanceof File) {
            return URL.createObjectURL(image);
        }
        return image;
    }, [image]);

    if (!imageUrl) {
        return null;
    }

    return (
        <img
            src={imageUrl}
            className={className}
            alt={alt}
            onLoad={() => {
                if (image instanceof File) {
                    URL.revokeObjectURL(imageUrl);
                }
            }}
        />
    );
}
