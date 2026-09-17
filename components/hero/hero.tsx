"use client"
import Link from "next/link";
import { TechButton } from "@/components/TeachButton";
import RandomGlow from "@/components/hero/randomGlow";
import {MyStatus, profile} from "@/lib/fakeData";


export default function Hero() {
    const handleOpenGmail = () => {
  const email = "ahz007aunghz@gmail.com";
  const subject = encodeURIComponent("Inquiry from Portfolio");
  const body = encodeURIComponent("Hi, I would like to get in touch with you regarding...");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
  window.open(gmailUrl, '_blank', 'noopener,noreferrer');
};
    return (
        <section className="w-full pt-32 pb-16 px-6 bg-grid-pattern lg:h-[80vh] grid place-items-center relative overflow-hidden">

      <RandomGlow/>


            <div className="w-full lg:w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                <div className="lg:col-span-7 flex flex-col gap-6">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-heading">
                        FULL-STACK DEVELOPER · {MyStatus.location}
                    </span>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
                        {profile.name}<span className="text-orange-500">.</span>
                    </h1>

                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-sans opacity-70">
                        {profile.description}
                    </p>


                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                            href="#projects"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-sm transition-colors shadow-lg shadow-orange-500/20"
                        >
                            View projects
                        </Link>
                        <TechButton onClick={handleOpenGmail}/>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-4">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 font-heading">12<span className="text-orange-500">+</span></h3>
                            <p className="text-xs text-gray-400 mt-1">Projects built</p>
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 font-heading">4</h3>
                            <p className="text-xs text-gray-400 mt-1">Core stacks</p>
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 font-heading">∞</h3>
                            <p className="text-xs text-gray-400 mt-1">Curiosity</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent  transition-opacity pointer-events-none" />

                        <div
                            className="rounded-xl overflow-hidden bg-zinc-900 aspect-[4/3] relative flex items-center justify-center border border-white/5"
                            style={{
                                clipPath: "polygon(30% 0%, 120% 0%, 120% 70%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                            }}
                        >
                            <img src={profile.avatar} alt={"avatar"} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}