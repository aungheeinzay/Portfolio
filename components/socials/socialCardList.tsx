import {profile, socials} from "@/lib/fakeData";
import SocialCard from "@/components/socials/socialCard";

export default function SocialCardList(){
    return (
        <div className="relative lg:w-8/12 p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {
               Object.entries(profile.socials).map(([key,value])=><SocialCard key={key} text={key} value={value}/>)
            }
        </div>
    )
}