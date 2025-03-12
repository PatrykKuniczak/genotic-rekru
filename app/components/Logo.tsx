import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-x-2">
            <Image src="/icons/preline_ui_logo.svg" alt="Preline Logo" width={100} height={100} />
        </Link>
    );
}
