import { destroy } from '@/actions/App/Http/Controllers/PuppyController';
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
import { Button } from '@/components/ui/button';
import { Puppy, SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { TrashIcon } from 'lucide-react';
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
                {puppy.can.delete && (
                    <AlertDialogTrigger asChild>
                        <Button
                            className={'group/delete bg-background/30 hover:bg-background transition cursor-pointer'}
                            size={'icon'}
                            variant={'secondary'}
                            aria-label={'Delete puppy ' + puppy.name + '?'}
                        >
                            <TrashIcon className={'size-4 group-hover/delete:stroke-destructive-foreground'} />
                        </Button>
                    </AlertDialogTrigger>
                )}
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
                            <AlertDialogAction
                                type="submit"
                                disabled={processing}
                            >
                                Delete {puppy.name}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
