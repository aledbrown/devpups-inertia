import { Button } from '@/components/ui/button';
import { Puppy } from '@/types';
import { TrashIcon } from 'lucide-react';

export function PuppyDelete({ puppy }: { puppy: Puppy }) {
    return (
        <div>
            <Button
                size={'icon'}
                variant={'destructive'}
            >
                <TrashIcon />
            </Button>
        </div>
    );
}
