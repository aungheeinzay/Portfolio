interface activitesGoalsCardProps{
    year:string;
    content:string;
    goal:string
}
export default function ActivitesGoalsCard({year,content,goal}:activitesGoalsCardProps){
    return (
        <div className={"flex flex-col justify-start p-2 gap-4"}>
            <p className={"font-heading text-xl font-bold text-orange-500 opacity-100"}>{year}</p>
            <p className={"text-md font-heading opacity-70"}>{content}</p>
            <p className={"text-md border border-white/10 bg-white/10 p-2 rounded-full text-xs px-2 opacity-50 hover:opacity-100"}>
                <span className={"text-orange-500 font-heading "}>GOAL : </span>
                <span className={""}>{goal}</span>
            </p>
        </div>
    )
}