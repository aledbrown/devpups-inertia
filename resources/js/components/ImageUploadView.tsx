import { useEffect, useState } from 'react';

export function ImageUploadView({source} : {source: File | string | null}) {
    const [src, setSrc] = useState<string | null>(null)

    useEffect(() => {
        if (source instanceof File) {
            const objectUrl = URL.createObjectURL(source);
            setSrc(objectUrl);

            return () => {
                URL.revokeObjectURL(objectUrl);
            }
        } else {
            setSrc(source);
        }
    }, [source]);

    if(!src) return null;

    return (
        <img src={src} className="mt-2 h-32 w-32 rounded-lg object-cover" alt={'image preview'} />
    )
}
