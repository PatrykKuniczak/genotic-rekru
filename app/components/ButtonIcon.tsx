import Image from 'next/image';
import { ReactNode } from 'react';

interface ButtonIconProps {
    src: string;
    alt: string;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    width?: number;
    height?: number;
    badge?: number;
}

export default function ButtonIcon({
    src,
    alt,
    onClick,
    className = '',
    children,
    width = 20,
    height = 20,
    badge,
}: ButtonIconProps) {
    return (
        <button
            type="button"
            className={`relative flex items-center justify-center rounded-md p-1 text-gray-400 transition-all hover:bg-gray-800 hover:text-white focus:ring-1 focus:ring-gray-600 focus:outline-none sm:p-1.5 ${className}`}
            onClick={onClick}
        >
            <Image src={src} alt={alt} width={width} height={height} />
            {children}

            {badge && (
                <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white sm:h-4 sm:w-4 sm:text-xs">
                    {badge}
                </span>
            )}
        </button>
    );
}
