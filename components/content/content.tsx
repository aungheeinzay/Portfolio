import TitleHeading from "@/components/heading/heading";
import {MdOutlineMailOutline} from "react-icons/md";
import Link from "next/link";
import {FaTelegram} from "react-icons/fa";

export default function Content(){
    return (
        <section id={"content"} className={"w-full bg-grid-pattern py-6 px-2"}>
            <div className={"w-full lg:w-4/12 mx-auto flex flex-col gap-4" }>
                <TitleHeading section={"07 - CONTENT"} heading={"Got a project?. Let us build it."}/>
                <p className={"opacity-70"}>Open to internships, junior roles and freelance work. Drop a message and I will reply within a day.</p>
                <div className={"flex gap-4 "}>
                    <button    className="flex gap-2 items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-sm transition-colors shadow-lg shadow-orange-500/20"
                    ><MdOutlineMailOutline/> Email me</button>
                    <Link className={"flex gap-2 items-center stripe-bg w-fit px-4 py-1 hover:bg-white hover:text-black border border-white/10 rounded"}
                        href={"https://t.me/AungHeein"}><FaTelegram/> message me</Link>
                </div>
            </div>
        </section>
    )
}