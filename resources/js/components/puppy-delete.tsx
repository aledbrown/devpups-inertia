import { Button } from '@/components/ui/button';
import { Puppy } from '@/types';
import { TrashIcon } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { router } from '@inertiajs/react';
import { destroy } from '@/actions/App/Http/Controllers/PuppyController';
import React from 'react';

export function PuppyDelete({ puppy }: { puppy: Puppy }) {
    const [processing, setProcessing] = React.useState(false);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        setProcessing(true);
        router.delete(destroy(puppy.id), {
            preserveScroll: true,
            onFinish: () => setProcessing(false),
        });
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        size={'icon'}
                        variant={'destructive'}
                        aria-label={'Delete puppy ' + puppy.name + '?'}
                    >
                        <TrashIcon />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <form onSubmit={submit}>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to delete puppy{' '}
                                <strong className="font-bold">
                                    {puppy.name}
                                </strong>
                                ? This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel disabled={processing}>
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction type="submit" disabled={processing}>
                                Delete {puppy.name}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
