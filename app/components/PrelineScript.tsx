'use client';

import { useEffect } from 'react';

export default function PrelineScript() {
    useEffect(() => {
        import('preline/preline');

        // @ts-ignore
        if (typeof window !== 'undefined' && window.HSStaticMethods) {
            // @ts-ignore
            window.HSStaticMethods.autoInit();
        }
    }, []);

    return null;
}
