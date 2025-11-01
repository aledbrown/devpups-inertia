import { PageWrapper } from "@/components/PageWrapper";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { Shortlist } from "@/components/Shortlist";
import { PuppiesList } from "@/components/PuppiesList";
import { NewPuppyForm } from "@/components/NewPuppyForm";
import { Suspense, use, useState } from "react";
import { Puppy } from "@/types";
import { LoaderCircle } from "lucide-react";
import { getPuppies } from "@/queries";
import { ErrorBoundary } from "react-error-boundary";

export default function App({puppies} : {puppies: Puppy[]}) {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <pre className="text-black">{JSON.stringify(puppies, null, 2)}</pre>
                {/*<ul className="flex gap-4 flex-wrap mt-4">*/}
                {/*    {puppies.map((puppy) => (*/}
                {/*        <li key={puppy.id} className="bg-white p-6 ring ring-black/10 flex gap-2">*/}
                {/*            <h2 className="text-black text-lg font-semibold">{puppy.name}</h2>*/}
                {/*            <p className="text-sm text-muted-foreground">{puppy.trait}</p>*/}
                {/*            <img src={puppy.image_url} alt={puppy.name} className="size-24 rounded-full object-cover"/>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}

                <ErrorBoundary fallbackRender={({ error }) => (
                    <div className="mt-12 bg-red-100 p-6 shadow ring ring-black/5">
                        <p className="text-red-500">
                            {error.message}: {error.details}
                        </p>
                    </div>
                )}>
                    <Suspense fallback={(
                        <div className="mt-12 bg-white p-6 shadow ring ring-black/5">
                            <LoaderCircle className="animate-spin stroke-slate-300" />
                        </div>
                    )}>
                        <main>
                            <Main />
                        </main>
                    </Suspense>
                </ErrorBoundary>
            </Container>
        </PageWrapper>
    );
}

const puppyPromise = getPuppies();

function Main() {
    const apiPuppies = use(puppyPromise);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [puppies, setPuppies] = useState<Puppy[]>(apiPuppies);

    return (
        <main>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Shortlist puppies={puppies} setPuppies={setPuppies} />
            </div>
            <PuppiesList searchQuery={searchQuery} puppies={puppies} setPuppies={setPuppies} />
            <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
        </main>
    );
}
