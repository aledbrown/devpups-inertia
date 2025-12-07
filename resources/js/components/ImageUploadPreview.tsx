import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ImageUploadPreview({
    source,
    className: className,
    ...restProps
}: {
    source: File | string | null;
    className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
    const [src, setSrc] = useState<string | null>(null);

    useEffect(() => {
        if (source instanceof File) {
            const objectUrl = URL.createObjectURL(source);
            setSrc(objectUrl);

            return () => {
                URL.revokeObjectURL(objectUrl);
            };
        } else {
            setSrc(source);
        }
    }, [source]);

    if (!src) return null;

    return (
        <img
            src={src}
            className={cn("mt-2 h-32 w-32 rounded-lg object-cover", className)}
            alt={'image preview'}
            {...restProps}
        />
    );
}
