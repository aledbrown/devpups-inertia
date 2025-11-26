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
import { Form, useForm } from '@inertiajs/react';
import { destroy } from '@/actions/App/Http/Controllers/PuppyController';
import React from 'react';

export function PuppyDelete({ puppy }: { puppy: Puppy }) {
    const { processing } = useForm();

    function submit(e: React.FormEvent) {
        e.preventDefault();
        console.log('delete', puppy.id);
        destroy(puppy.id);
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        size={'icon'}
                        variant={'destructive'}
                        aria-label={'Delete puppy' + puppy.name + '?'}
                    >
                        <TrashIcon />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <Form
                        action={destroy(puppy.id).url}
                        method='delete'
                        disableWhileProcessing
                    >
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to delete puppy{' '}
                                <strong className="font-bold">
                                    {puppy.name}"
                                </strong>
                                ? This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction type={'submit'}>
                                Delete {puppy.name}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </Form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
