import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { login, logout } from '@/routes';
import { Button } from '@/components/ui/button';

export function Header() {
    const { auth } = usePage<SharedData>().props;
    return (
        <header>
            {/*<pre>{JSON.stringify(auth, null, 2)}</pre>*/}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a className="group" href="/">
                    <div className="inline-flex items-center gap-4">
                        <img
                            src="/images/logo.png"
                            alt="DevPups"
                            className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
                        />
                        <p className="text-lg font-semibold">Dev Pups</p>
                    </div>
                </a>

                {/*Auth Actions*/}
                {auth.user ? (
                    <div className="flex items-center gap-4">
                        <p>Hi, {auth.user.name}</p>
                        <Button asChild>
                            <Link className="cursor-pointer" method="post" as="button" href={logout()}>
                                Log out
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <Button asChild>
                        <Link href={login()}>Log in</Link>
                    </Button>
                )}
            </div>
            {/* Hero copy */}
            <div className="mt-6">
                <h1 className="text-lg font-bold">
                    We've got the best puppies!
                </h1>
                <p className="text-slate-600">
                    Don't take our word — let the pictures do the talking :)
                </p>
                {!auth.user && (
                    <p className="text-slate-600">
                        <Link className="text-blue-500 hover:underline" href={login()}>Log in</Link> to keep track of your favorite puppies and add new ones!
                    </p>
                )}
            </div>
        </header>
    );
}
