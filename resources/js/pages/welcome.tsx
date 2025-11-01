import { PageWrapper } from '@/components/PageWrapper';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Search } from '@/components/Search';
import { Shortlist } from '@/components/Shortlist';
import { PuppiesList } from '@/components/PuppiesList';
import { NewPuppyForm } from '@/components/NewPuppyForm';
import { useState } from 'react';
import { Puppy, SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
// import { LoaderCircle } from "lucide-react";
// import { getPuppies } from "@/queries";
// import { ErrorBoundary } from "react-error-boundary";

export default function App({ puppies }: { puppies: Puppy[] }) {
    return (
        <PageWrapper>
            <Container>
                <Header />
                {/*<pre className="text-black">{JSON.stringify(puppies, null, 2)}</pre>*/}
                <Main inertiaPuppies={puppies} />
            </Container>
        </PageWrapper>
    );
}

function Main({ inertiaPuppies }: { inertiaPuppies: Puppy[] }) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [puppies, setPuppies] = useState<Puppy[]>(inertiaPuppies);
    const { auth } = usePage<SharedData>().props;

    return (
        <main>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                {auth.user && (
                    <Shortlist puppies={inertiaPuppies} />
                )}
            </div>
            <PuppiesList puppies={inertiaPuppies} searchQuery={searchQuery} />
            {auth.user && (
                <NewPuppyForm puppies={inertiaPuppies} setPuppies={setPuppies} />
            )}
        </main>
    );
}
