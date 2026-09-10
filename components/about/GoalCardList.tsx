import {goalsList} from "@/lib/fakeData";
import ActivitesGoalsCard from "@/components/about/activitesGoalsCard";

export default function GoalCardList(){
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
            {
                goalsList.map((goal)=>(
                    <ActivitesGoalsCard key={goal.year} {...goal} />
                ))
            }
        </div>
    )
}