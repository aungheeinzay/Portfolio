"use server"
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import {getProfile} from "@/features/profile/query/getProfile";
import Spreater from "@/components/Line";
import Tools from "@/components/tools/Tools";
import Shipped from "@/components/shipped/shipped";
import Social from "@/components/socials/social";
import About from "@/components/about/About";
import Credentials from "@/components/Credintials/Credentials";
import Content from "@/components/content/content";
import Footer from "@/components/footer/footer";

export default async function Page(){

    return(
        <main className={"w-full relative"}>

          <div className={"relative flex flex-col "}>

              <div className={"w-8/12 h-full border-[0.8px] border-white/10 left-1/2 -translate-x-1/2 -z-10 absolute"}></div>


              <Hero/>
              <Spreater/>
              <Tools/>
              <Spreater/>
          </div>
            <Shipped/>
            <Spreater/>
            <Social/>
          <div className={" w-full border border-white/10 py-4 bg-black/50"}>
              <About/>
          </div>
            <div className={"w-full border border-white/10 py-4 bg-primary"}>
                <Credentials/>
            </div>
        <Content/>
            <Footer/>
        </main>
    )
}