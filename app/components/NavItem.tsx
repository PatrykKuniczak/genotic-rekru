import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
    src: string;
    alt: string;
    label: string;
    href?: string;
    isActive?: boolean;
    badge?: ReactNode;
    onClick?: () => void;
    className?: string;
    iconClassName?: string;
    iconSize?: number;
}

export default function NavItem({
    src,
    alt,
    label,
    href = '#',
    isActive = false,
    badge,
    onClick,
    className = '',
    iconClassName = '',
    iconSize = 18,
}: NavItemProps) {
    const content = (
        <>
            <div
                className={`flex h-5 min-h-[20px] w-5 min-w-[20px] items-center justify-center rounded-md sm:h-6 sm:min-h-[24px] sm:w-6 sm:min-w-[24px] ${iconClassName}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={iconSize}
                    height={iconSize}
                    className="min-h-[16px] min-w-[16px] sm:min-h-[18px] sm:min-w-[18px]"
                />
            </div>
            <span className="ml-1 sm:ml-2">{label}</span>
            {badge && <div className="ml-1 sm:ml-2">{badge}</div>}
        </>
    );

    const baseClasses = `flex items-center transition-all ${
        isActive ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'
    } ${className}`;

    if (onClick) {
        return (
            <button type="button" className={baseClasses} onClick={onClick}>
                {content}
            </button>
        );
    }

    return (
        <Link href={href} className={baseClasses}>
            {content}
        </Link>
    );
}
