import TitleHeading from "@/components/heading/heading";
import GridBackground from "@/components/socials/gridBackground";
import SocialCardList from "@/components/socials/socialCardList";

export default function Social(){
    return (
        <section id={"connect"} className="relative w-full lg:w-10/12 mx-auto">

            <GridBackground>
                <TitleHeading section={"04 — Connect"} heading={"Same handle everywhere — follow along, drop a message, or just say hi."}/>
                <SocialCardList/>
            </GridBackground>

        </section>
    )
}