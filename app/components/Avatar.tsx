import Image from 'next/image';

interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
    onClick?: () => void;
}

export default function Avatar({
    src = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    alt = 'Zdjęcie profilowe użytkownika',
    size = 32,
    className = '',
    onClick,
}: AvatarProps) {
    return (
        <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full transition-all hover:ring-2 hover:ring-gray-600 focus:ring-2 focus:ring-gray-600 focus:outline-none ${className}`}
            onClick={onClick}
        >
            <Image src={src} alt={alt} width={size} height={size} className="rounded-full" />
        </button>
    );
}
