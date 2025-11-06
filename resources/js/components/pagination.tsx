import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PaginationLinks, PaginationMeta } from '@/types';
import { Link } from '@inertiajs/react';

type PaginationProps = {
    meta: PaginationMeta;
    links: PaginationLinks;
    className?: string;
};

export function Pagination({ meta, links, className }: PaginationProps) {
    return (
        <div className={cn('flex items-center justify-between', className)}>
            <div>
                {links.prev && (
                    <Button asChild>
                        <Link href={links.prev}>{links.prev}</Link>
                    </Button>
                )}
            </div>
            <div>
                {links.next && (
                    <Button asChild>
                        <Link href={links.next}>{links.next}</Link>
                    </Button>
                )}
            </div>
            {/*<pre>{JSON.stringify(meta, links, null, 2)}</pre>*/}
        </div>
    );
}
