"use client";
import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 640) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // screen size စစ်ဆေးသည့် function
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };


        checkScreenSize();

        // Screen အရွယ်အစား ပြောင်းလဲသည့်အခါတိုင်း (Resize) စစ်ဆေးရန်
        window.addEventListener("resize", checkScreenSize);

        // Component unmount လုပ်ပါက listener ကို ဖြုတ်ရန်
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [breakpoint]);

    return isMobile;
}