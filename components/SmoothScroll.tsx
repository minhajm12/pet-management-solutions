"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function LenisControl() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        // Reset scroll position to top on route change
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true });

        // Force Lenis to recalculate document scroll dimensions
        const resizeLenis = () => {
            lenis.resize();
        };

        resizeLenis();

        // Additional resize ticks as async page content & images render
        const t1 = setTimeout(resizeLenis, 100);
        const t2 = setTimeout(resizeLenis, 100);
        const t3 = setTimeout(resizeLenis, 100);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [pathname, lenis]);

    return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.12, duration: 1.5, smoothWheel: true }}>
            <LenisControl />
            {children}
        </ReactLenis>
    );
}