import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PaginationLinks, PaginationMeta } from '@/types';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
                    <Button variant="ghost" asChild>
                        <Link preserveScroll href={links.prev}>
                            <ChevronLeft className={cn('mr-2 h-4 w-4')} />
                            <span>Previous</span>
                        </Link>
                    </Button>
                )}
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <span className="text-sm text-muted-foreground font-medium">
                        Page {meta.current_page} of {meta.last_page}
                    </span>
                </div>
            </div>
            <div>
                {links.next && (
                    <Button variant="ghost" asChild>
                        <Link preserveScroll href={links.next}>
                            <span>Next</span>
                            <ChevronRight className={cn('ml-2 h-4 w-4')} />
                        </Link>
                    </Button>
                )}
            </div>
            {/*<pre>{JSON.stringify(meta, links, null, 2)}</pre>*/}
        </div>
    );
}
