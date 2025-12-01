import { LikeToggle } from '@/components/LikeToggle';
import { Pagination } from '@/components/pagination';
import type { PaginatedResponse, Puppy } from '@/types';
import { PuppyDelete } from '@/components/puppy-delete';
import React from 'react';
import { PuppyUpdate } from '@/components/puppy-update';

export function PuppiesList({
    puppies,
}: {
    puppies: PaginatedResponse<Puppy>;
}) {
    return (
        <>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {puppies.data.map((puppy) => (
                    <PuppyCard key={puppy.id} puppy={puppy} />
                ))}
            </ul>
            <Pagination className={"mt-6"} meta={puppies.meta} links={puppies.links} />
        </>
    );
}

type PuppyCardProps = {
    puppy: Puppy;
};

function PuppyCard({ puppy }: PuppyCardProps) {
    return (
        <li
            key={puppy.id}
            className="relative overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
        >
            <div className="absolute p-4 top-0 right-0 flex gap-2">
                {puppy.can.update && (
                    <PuppyUpdate puppy={puppy} />
                )}
                {puppy.can.delete && (
                    <PuppyDelete puppy={puppy} />
                )}
            </div>

            {/*{puppy.can.update && (*/}
            {/*    <div className="absolute p-4 top-0 right-0">*/}
            {/*        <PuppyUpdate puppy={puppy} />*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*{puppy.can.delete && (*/}
            {/*    <div className="absolute p-4 top-0 right-0">*/}
            {/*        <PuppyDelete puppy={puppy} />*/}
            {/*    </div>*/}
            {/*)}*/}
            <img
                className="aspect-square object-cover"
                alt={puppy.name}
                src={puppy.imageUrl}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{puppy.name}</p>
                    {/*<pre className="text-black">{JSON.stringify(puppy.can.delete, null, 2)}</pre>*/}
                    <span className="text-slate-300">·</span>
                    <p className="text-slate-500">{puppy.trait}</p>
                </div>
                <LikeToggle puppy={puppy} />
            </div>
        </li>
    );
}
