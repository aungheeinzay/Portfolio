import React from "react";

interface GridBackgroundProps {
    children?: React.ReactNode;
}

export default function GridBackground({ children }: GridBackgroundProps) {
    return (
        <div className="relative w-full bg-primary text-gray-400  font-mono">

            {/* ကော်လံ အညွှန်းများ */}
            <div className="absolute top-0 left-16 lg:left-24 right-0 grid grid-cols-6 text-xs text-gray-600 border-b border-white/5 py-3 px-4 z-10">
                <span className="text-left pl-2">1</span>
                <span className="text-left pl-2">2</span>
                <span className="text-left pl-2">3</span>
                <span className="text-left pl-2">4</span>
                <span className="text-left pl-2">5</span>
                <span className="text-left pl-2">6</span>
            </div>

            {/* အတန်း အညွှန်းများနှင့် ဇယားကွက်လိုင်းများ */}
            <div className="flex flex-col pt-10">
                {Array.from({ length: 6 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex items-center border-b border-white/5 h-20 relative">

                        <span className="w-16 lg:w-24 text-xs text-gray-600 pr-4 text-right flex-shrink-0">
                            R{rowIndex + 1}
                        </span>

                        {/* ဇယားကွက် ဆုံမှတ်များ */}
                        <div className="flex-1 grid grid-cols-6 h-full relative">
                            {Array.from({ length: 6 }).map((_, colIndex) => {
                                // ဥပမာ - R6 (rowIndex 5) နှင့် Column 1 (colIndex 0) ဆုံမှတ်တွင် GPS ပုံစံ ထည့်သွင်းခြင်း
                                const isAvailablePoint = rowIndex === 5 && colIndex === 0;

                                return (
                                    <div key={colIndex} className="relative border-r border-white/5 h-full flex items-center justify-center">
                                        {isAvailablePoint ? (
                                            <div className="absolute -top-2 -left-2 flex items-center z-30 pointer-events-auto">
                                                <div className="relative flex items-center justify-center">
                                                    <span className="absolute w-5 h-5 rounded-full bg-orange-500/40 animate-ping"></span>
                                                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                                                </div>
                                                <span className="ml-3 text-xs font-heading text-gray-300 whitespace-nowrap bg-[#121212]/90 px-2.5 py-1 rounded-md border border-white/10 shadow-lg">
                                                    Available for work
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white/20 rounded-full"></span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>


            <div className="lg:absolute inset-0 z-20 pointer-events-none">
                <div className="pointer-events-auto w-full h-full lg:w-10/12 mx-auto p-8">
                    {children}
                </div>
            </div>
    
        </div>
    );
}