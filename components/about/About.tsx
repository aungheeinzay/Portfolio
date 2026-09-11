import TitleHeading from "@/components/heading/heading";
import {aboutParagraphs, MyStatus} from "@/lib/fakeData";
import GoalCardList from "@/components/about/GoalCardList";


export default function About(){
    return (
     <section id={"about"} className={"w-full lg:w-8/12 mx-auto mt-4 px-2"}>
         <TitleHeading section={"05 - About"} heading={"Junior Developer ,Learning In Public"}/>
        <main className={"w-full grid gri-cols-1 lg:grid-cols-4 gap-8  py-4"}>
            <div className={"font-lg lg:col-span-3 grid place-items-cneter gap-4"}>
                {
                    aboutParagraphs.map((parag,i)=>(
                        <p className={"text-md opacity-50"}
                            key={i}>- {parag}</p>
                    ))
                }
            </div>
            <div className={"lg:col-span-1"}>
                <h2 className={"text-xl text-heading font-bold"}>Status <span className={"text-green-500"}>.</span></h2>
                <div className={"border-b border-white/10 flex flex-col gap-2 py-2"}>
                    <p className={"text-lg font-heading"}>Education</p>
                    <p className={"opacity-50"}>{MyStatus.education}</p>
                </div>
                <div className={"border-b border-white/10 flex flex-col gap-2 py-2"}>
                    <p className={"text-lg font-heading"}>Based On</p>
                    <p className={"opacity-50"}>{MyStatus.location}</p>
                </div>
                <div className={"border-b border-white/10 flex flex-col gap-2 py-2"}>
                    <p className={"text-lg font-heading"}>Open To</p>
                    <p className={"opacity-50"}>{MyStatus.openTo}</p>
                </div>
                <div className={"border-b border-white/10 flex flex-col gap-2 py-2"}>
                    <p className={"text-lg font-heading"}>Working Mode</p>
                    <p className={"opacity-50"}>{MyStatus.mode}</p>
                </div>

            </div>
        </main>

         <div className={"flex flex-col"}>
            <div className={"flex items-center"}>
                <h2 className={"w-full text-xl font-heading border border-white/10 p-2"}>JOURNEY . YEARS, ACTIVITES && GOALS <span className={"font-heading text-orange-500"}>.</span></h2>
                <hr className={"w-full h-2 text-white/10"}/>
            </div>
            <GoalCardList/>
         </div>
     </section>
    )
}