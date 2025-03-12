'use client';

import { ReactNode } from 'react';

interface ImportSourceProps {
    icon: ReactNode;
    name: string;
    label: string;
    bgColor?: string;
}

function ImportSource({ icon, name, label, bgColor = 'bg-gray-700' }: ImportSourceProps) {
    return (
        <div className="flex items-center justify-between border-b border-gray-700 py-3">
            <div className="flex items-center gap-3">
                <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${bgColor}`}
                >
                    {icon}
                </div>
                <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-gray-400">{label}</p>
                </div>
            </div>
            <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-white shadow-sm hover:bg-gray-700 disabled:pointer-events-none disabled:opacity-50"
            >
                Launch Importer
            </button>
        </div>
    );
}

export default function ImportDataPanel() {
    return (
        <div className="rounded-xl bg-gray-800 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium">Import data</h3>
                <div className="hs-dropdown relative inline-flex">
                    <button
                        id="import-dropdown"
                        type="button"
                        className="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg border border-transparent p-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white disabled:pointer-events-none disabled:opacity-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                    <div
                        className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 mt-2 hidden min-w-40 divide-y divide-gray-700 rounded-lg bg-gray-900 p-2 opacity-0 shadow-md transition-[opacity,margin]"
                        aria-labelledby="import-dropdown"
                    >
                        <div className="py-2 first:pt-0 last:pb-0">
                            <a
                                className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                                href="#"
                            >
                                Settings
                            </a>
                            <a
                                className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                                href="#"
                            >
                                Export data
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mb-5 text-sm text-gray-400">
                See and talk to your users and leads immediately by importing your data into the
                Preline platform.
            </p>

            <div className="mb-3 flex items-center justify-between">
                <h4 className="text-xs font-medium text-gray-500 uppercase">IMPORT USERS FROM</h4>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-300">
                    3 sources
                </span>
            </div>

            <div className="space-y-1">
                <ImportSource
                    icon={
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                                <path
                                    d="M 5.223 7.88 L 12 12.88 L 18.777 7.88 L 18.777 6.16 L 12 11.16 L 5.223 6.16 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 18.777 6.16 L 18.777 17.84 L 21.5 20 L 21.5 4 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 2.5 4 L 2.5 20 L 5.223 17.84 L 5.223 6.16 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 5.223 17.84 L 2.5 20 L 21.5 20 L 18.777 17.84 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 5.223 6.16 L 2.5 4 L 21.5 4 L 18.777 6.16 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 12 12.88 L 5.223 7.88 L 5.223 17.84 L 12 12.88 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 18.777 7.88 L 12 12.88 L 18.777 17.84 Z"
                                    fill="#f2f2f2"
                                />
                                <path
                                    d="M 12.4 12.61 L 12 12.88 L 11.6 12.61 L 5.223 17.84 L 18.777 17.84 Z"
                                    fill="#d54c3f"
                                />
                                <path
                                    d="M 5.223 7.88 L 12 12.88 L 18.777 7.88 L 18.777 6.16 L 12 11.16 L 5.223 6.16 Z"
                                    fill="#b63524"
                                />
                                <path d="M 18.777 6.16 L 18.777 7.88 L 21.5 4 Z" fill="#de5145" />
                                <path d="M 5.223 6.16 L 5.223 7.88 L 2.5 4 Z" fill="#de5145" />
                            </g>
                        </svg>
                    }
                    name="Gmail"
                    label="Users"
                    bgColor="bg-gray-900"
                />

                <ImportSource
                    icon={
                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                            <path
                                fill="currentColor"
                                d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
                            />
                        </svg>
                    }
                    name="Notion"
                    label="Users"
                    bgColor="bg-gray-900"
                />

                <ImportSource
                    icon={
                        <svg
                            className="h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <line x1="10" y1="9" x2="8" y2="9" />
                        </svg>
                    }
                    name="CSV"
                    label="Users"
                    bgColor="bg-green-600"
                />
            </div>

            <div className="mt-5 border-t border-gray-700 pt-4">
                <div className="flex items-center">
                    <p className="text-sm text-gray-400">
                        Or you can{' '}
                        <a
                            href="#"
                            className="text-purple-400 hover:text-purple-300 hover:underline"
                        >
                            sync data to Preline
                        </a>{' '}
                        to ensure your data is always up-to-date.
                    </p>
                    <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-purple-900/30 px-2 py-0.5 text-xs font-medium text-purple-300">
                        New
                    </span>
                </div>
            </div>
        </div>
    );
}
