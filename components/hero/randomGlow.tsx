"use client";

import { useEffect, useRef } from "react";

export default function RandomGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        let animationFrame: number;

        let startX = 0;
        let startY = 0;

        let targetX = 0;
        let targetY = 0;

        let startTime = performance.now();

        const randomPosition = () => {
            targetX = Math.random() * 500 - 250;
            targetY = Math.random() * 300 - 150;
        };

        randomPosition();

        const animate = (time: number) => {
            const duration = 5000;

            const progress = Math.min(
                (time - startTime) / duration,
                1
            );

            // Smooth movement
            const eased =
                progress * progress * (3 - 2 * progress);

            const x =
                startX + (targetX - startX) * eased;

            const y =
                startY + (targetY - startY) * eased;

            glow.style.transform = `translate(${x}px, ${y}px)`;

            if (progress >= 1) {
                startX = targetX;
                startY = targetY;

                randomPosition();

                startTime = time;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="
        animate-glow-pulse
        absolute
        top-1/3
        left-1/3
        w-96
        h-96
        rounded-full
        bg-orange-500/30
        blur-[90px]
        pointer-events-none
    "
        />
    );
}