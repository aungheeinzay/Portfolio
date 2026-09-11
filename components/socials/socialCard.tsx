import MatchIcon from "@/components/socials/IconMatcher";

interface SocialCardProps {
    text: string;
    value:string
}

export default function SocialCard({ text,value }: SocialCardProps) {
    return (
        <a href={value}
            className="cursor-pointer lg:col-span-1 border border-white/10 p-4 flex flex-col items-center justify-between h-[150px] transition-all duration-300 group relative overflow-hidden hover:bg-[#121212]/90"
        >
            <span className="absolute top-0 left-0 h-[1px] w-full bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            <span className="absolute bottom-0 right-0 h-[1px] w-full bg-orange-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

            <span className="text-6xl lg:text-7xl font-bold font-heading text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] group-hover:[-webkit-text-stroke:1px_#f97316] transition-all duration-300 mt-4">
                {text.substring(0, 1).toUpperCase()}
            </span>

            <div className="flex items-center font-heading gap-2 text-gray-400  transition-colors mt-auto">
                <span
                    className="text-xs flex gap-2 items-center  tracking-wider">
                    <MatchIcon text={text}/>
                    {text}</span>
            </div>
        </a>
    );
}