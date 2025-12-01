import { destroy } from '@/actions/App/Http/Controllers/PuppyController';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Puppy } from '@/types';
import { router } from '@inertiajs/react';
import { LoaderCircle, TrashIcon } from 'lucide-react';
import React from 'react';
import { clsx } from 'clsx';

export function PuppyDelete({ puppy }: { puppy: Puppy }) {
    const [open, setOpen] = React.useState(false);
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
            <AlertDialog open={open} onOpenChange={setOpen}>
                {puppy.can.delete && (
                    <AlertDialogTrigger asChild>
                        <Button
                            className={
                                'group/delete cursor-pointer bg-background/30 transition hover:bg-background'
                            }
                            size={'icon'}
                            variant={'secondary'}
                            aria-label={'Delete puppy ' + puppy.name + '?'}
                        >
                            <TrashIcon
                                className={
                                    'size-4 group-hover/delete:stroke-destructive-foreground'
                                }
                            />
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
                            <Button
                                className={'relative disabled:opacity-100'}
                                type="submit"
                                disabled={processing}
                            >
                                {processing && (
                                    <div
                                        className={
                                            'absolute inset-0 grid place-items-center'
                                        }
                                    >
                                        <LoaderCircle
                                            className={
                                                'size-5 animate-spin stroke-primary-foreground'
                                            }
                                        />
                                    </div>
                                )}
                                <span
                                    className={clsx(processing && 'invisible')}
                                >
                                    Delete {puppy.name}
                                </span>
                            </Button>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
