import { useForm } from '@inertiajs/react';
import puppies from '@/routes/puppies';
import InputError from '@/components/input-error';
import { useRef } from 'react';
import { ImageUploadPreview } from '@/components/ImageUploadPreview';

export function NewPuppyForm({
    mainRef,
}: {
    mainRef?: React.RefObject<HTMLElement | null>;
}) {
    const { post, setData, data, errors, reset, processing } = useForm({
        name: '',
        trait: '',
        image: null as File | null,
    });
    const fileInputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    post(puppies.store().url, {
                        preserveScroll: true,
                        onSuccess: () => {
                            reset();
                            if (fileInputRef.current) {
                                fileInputRef.current.value = '';
                            }
                            if (mainRef?.current) {
                                mainRef.current.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start',
                                });
                            }
                        },
                    });
                }}
                className="mt-4 flex w-full flex-col items-start gap-4"
            >
                <div className="grid w-full gap-6 md:grid-cols-3">
                    <fieldset className="flex w-full flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input
                            // required
                            value={data.name}
                            className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            id="name"
                            type="text"
                            name="name"
                            disabled={processing}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <InputError message={errors.name} />}
                    </fieldset>
                    <fieldset className="flex w-full flex-col gap-1">
                        <label htmlFor="trait">Personality trait</label>
                        <input
                            // required
                            value={data.trait}
                            className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            id="trait"
                            type="text"
                            name="trait"
                            disabled={processing}
                            onChange={(e) => setData('trait', e.target.value)}
                        />
                        {errors.trait && <InputError message={errors.trait} />}
                    </fieldset>
                    <fieldset className="col-span-2 flex w-full flex-col gap-1">
                        <label htmlFor="image">Profile pic</label>
                        <input
                            // required
                            ref={fileInputRef}
                            className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            id="image"
                            type="file"
                            name="image"
                            disabled={processing}
                            onChange={(e) => {
                                setData(
                                    'image',
                                    e.target.files ? e.target.files[0] : null,
                                );
                            }}
                        />
                        {errors.image && <InputError message={errors.image} />}
                    <ImageUploadPreview className="mt-6 self-start" source={data.image} />
                    </fieldset>

                </div>
                <button
                    className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-200"
                    type="submit"
                    disabled={processing}
                >
                    {processing
                        ? `Adding ${data?.name || 'puppy'}...`
                        : 'Add puppy'}
                </button>
            </form>
        </div>
    );
}

/*
function SubmitButton() {
    const status = useFormStatus();
    return (
        <button
            className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-200"
            type="submit"
            disabled={status.pending}
        >
            {status.pending
                ? `Adding ${status?.data?.get('name') || 'puppy'}...`
                : 'Add puppy'}
        </button>
    );
}
*/
