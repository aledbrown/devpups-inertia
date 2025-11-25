import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { toast } from 'sonner';

function PageWrapper({ children }: { children: React.ReactNode }) {
    const { flash, errors } = usePage<SharedData>().props;
    if (flash.success) toast.success(flash.success);
    if (flash.info) toast.info(flash.info);
    if (flash.warning) toast.warning(flash.warning);
    if (errors) {
        for (const [key, value] of Object.entries(errors)) {
            toast.error(value);
        }
    }
    return (
        <>
            {/*<pre>{JSON.stringify(flash, null, 2)}</pre>*/}
            <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
                {children}
            </div>
            <Toaster position={'top-center'} richColors={true} />
        </>
    );
}

export default PageWrapper;
