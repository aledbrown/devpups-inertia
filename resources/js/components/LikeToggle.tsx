import { like } from '@/routes/puppies';
import { Puppy, SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { clsx } from 'clsx';
import { Heart, LoaderCircle } from 'lucide-react';

export function LikeToggle({ puppy }: { puppy: Puppy }) {
    const { auth } = usePage<SharedData>().props;
    const { processing, patch } = useForm();

    function submit(e: React.FormEvent) {
        e.preventDefault();
        patch(like(puppy.id).url, { preserveScroll: true });
    }

    return (
        <form onSubmit={submit} className="flex h-full">
            <button
                type="submit"
                className={`group ${auth.user ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                disabled={!auth.user || processing}
                data-loading={processing ? true : undefined}
            >
                {processing ? (
                    <LoaderCircle className="animate-spin stroke-slate-300" />
                ) : (
                    <Heart
                        className={clsx(
                            puppy.likedBy.includes(auth?.user?.id) && auth?.user
                                ? 'fill-pink-500 stroke-none'
                                : 'stroke-slate-200 group-hover:stroke-slate-300',
                        )}
                    />
                )}
            </button>
        </form>
    );
}
