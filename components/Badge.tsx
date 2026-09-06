interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>{
    text:string

}
export default function Badges({text,...props}:BadgeProps){
    return (
    <div
        {...props}
        className={"w-fit h-fit py-1 px-2 text-sm font-thin text-neutral-500 rounded-full border border-white/10 bg-white/10"}
    >
        {text}
    </div>
    )
}