import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PrelineScript from './components/PrelineScript';
import type { ReactNode } from 'react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Preline Dashboard',
    description: 'Preline Dashboard',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased`}
            >
                <main>{children}</main>

                <PrelineScript />
            </body>
        </html>
    );
}
