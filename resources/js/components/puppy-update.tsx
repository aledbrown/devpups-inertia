import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Puppy } from '@/types';
import { useForm } from '@inertiajs/react';
import clsx from 'clsx';
import { EditIcon, LoaderCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { update } from '@/actions/App/Http/Controllers/PuppyController';

export function PuppyUpdate({ puppy }: { puppy: Puppy }) {
    const { data, setData, errors, post, processing } = useForm({
        name: puppy.name,
        trait: puppy.trait,
        image: null as File | null,
        _method: 'put',
    });

    const [open, setOpen] = useState(false);

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(update(puppy.id).url, {
            onSuccess: () => setOpen(false),
            preserveScroll: true,
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="group/update cursor-pointer bg-background/30 transition hover:bg-background"
                    size="icon"
                    variant="secondary"
                    aria-label="Update puppy"
                >
                    <EditIcon className="size-4 group-hover/update:stroke-popover-foreground" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Edit {puppy.name}</DialogTitle>
                <DialogDescription>
                    Make changes to your puppy’s information below.
                </DialogDescription>
                <form className="space-y-6" onSubmit={submit}>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                        placeholder="Full name"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-500">
                            {errors.name}
                        </p>
                    )}

                    <Label htmlFor="trait">Personality trait</Label>
                    <Input
                        id="trait"
                        name="trait"
                        className="mt-1 block w-full"
                        value={data.trait}
                        onChange={(e) => setData('trait', e.target.value)}
                        required
                        placeholder="Personality trait"
                    />

                    {errors.trait && (
                        <p className="text-xs text-red-500">
                            {errors.trait}
                        </p>
                    )}

                    <Label htmlFor="image">Change image</Label>
                    <Input
                        id="image"
                        name="image"
                        type="file"
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData(
                                'image',
                                e.target.files ? e.target.files[0] : null,
                            )
                        }
                        placeholder="Profile picture"
                    />

                    {errors.image && (
                        <p className="text-xs text-red-500">
                            {errors.image}
                        </p>
                    )}

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>

                        <Button
                            className="relative disabled:opacity-100"
                            disabled={processing}
                            type="submit"
                        >
                            {processing && (
                                <div className="absolute inset-0 grid place-items-center">
                                    <LoaderCircle className="size-5 animate-spin stroke-primary-foreground" />
                                </div>
                            )}
                            <span className={clsx(processing && 'invisible')}>
                                Update
                            </span>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
