'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

// Tymczasowa implementacja IconButton
function IconButton({
    children,
    className = '',
    badge,
}: {
    children: ReactNode;
    className?: string;
    badge?: number;
}) {
    return (
        <button className={`relative text-gray-400 hover:text-white ${className}`}>
            {children}
            {badge && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs">
                    {badge}
                </span>
            )}
        </button>
    );
}

export default function InfoIcon() {
    return (
        <button
            type="button"
            className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-medium text-gray-300 transition-all hover:text-white"
        >
            <Image src="/icons/info-icon.svg" alt="Info Icon" width={20} height={20} />
        </button>
    );
}
