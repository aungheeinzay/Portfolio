import React from "react";

interface TechButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    text?: string;
    children?: React.ReactNode;

}

export function TechButton({ text = "Get Touch",children, onClick,className, ...props }: TechButtonProps) {
    return (
        <button
            onClick={onClick}
            {...props}
            className={"relative stripe-bg group px-8 py-3 cursor-pointer border border-white/25 border-dashed "+className}
        >
            {/* ၄၅ ဒီဂရီ ထောင့်ဖြတ်ဖြင့် ဝင်လာမည့် Background Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <span className="absolute -inset-full bg-white -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            </div>

            {/* ထောင့်ကွင်းစကွဲများ */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white z-20 "></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white z-20 "></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white z-20 "></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white z-20 "></div>

            {/* စာသား */}
            <span className="relative z-10 font-bold text-sm text-white group-hover:text-black transition-colors duration-300">
                {children || text}
            </span>
        </button>
    );
}