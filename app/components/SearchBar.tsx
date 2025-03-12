'use client';

import { useState } from 'react';
import ButtonIcon from './ButtonIcon';

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    onSearch?: (query: string) => void;
}

export default function SearchBar({
    placeholder = 'Search Preline',
    className = '',
    onSearch,
}: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={`relative flex w-full items-center ${className}`}>
            <input
                type="text"
                className="block w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-1.5 pr-10 pl-9 text-sm text-gray-300 focus:border-gray-600 focus:ring-gray-600 focus:outline-none"
                placeholder={placeholder}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <span className="mr-1 hidden text-xs text-gray-500 sm:inline">⌘ /</span>
            </div>
        </div>
    );
}
