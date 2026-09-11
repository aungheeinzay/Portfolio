import { profile } from "@/lib/fakeData";
import { FaLocationPin } from "react-icons/fa6";
import Spreater from "@/components/Line";
import {MdEmail} from "react-icons/md";
import {FaFacebook, FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

type ResumeProps = {
    role: string;
    summary: string;
    skills: string[];
};

export default function ResumeBio({
                                      role,
                                      summary,
                                      skills,
                                  }: ResumeProps) {
    return (
        <aside>

            {/* Avatar */}
            <div
                className="
          w-30 h-30
          rounded-xl
          overflow-hidden
          bg-zinc-900
          border border-white/5
        "
                style={{
                    clipPath:
                        "polygon(30% 0%, 120% 0%, 120% 70%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
            >
                <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-5 grid gap-4">

                {/* Name */}
                <div className="font-heading">
                    <p className="text-lg">
                        {profile.name}.
                    </p>

                    <p className="text-orange-500 uppercase">
                        {role}
                    </p>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                    {summary}
                </p>

                {/* Contact */}
                <div className="my-5">
                    <ul className="flex flex-col gap-3 text-sm text-white/60">

                        <li className="flex gap-2 items-center">
                            <FaLocationPin />
                            {profile.location}
                        </li>

                        <li className="flex gap-2 items-center">
                            <MdEmail/>
                            ahz007aunghz@gmail.com
                        </li>

                        <li className="flex gap-2 items-center">
                            <FaTelegram/>
                            {profile.socials.telegram}
                        </li>

                        <li className="flex gap-2 items-center">
                            <FaLinkedin/>
                            {profile.socials.linkedin}
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaFacebook/>
                            {profile.socials.facebook}
                        </li>
                        <li className="flex gap-2 items-center">
                            <FaGithub/>
                            {profile.socials.github}
                        </li>

                        <li className="flex gap-2 items-center">
                            <TbWorld />
                            {profile.socials.web}
                        </li>


                    </ul>
                </div>

                <Spreater />


                <div className="mt-5">

                    <p className="uppercase font-bold text-lg">
                        Technical Skills
                        <span className="text-orange-500">
              .
            </span>
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">

                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="
                  text-xs
                  px-2 py-1
                  rounded
                  bg-white/5
                  border border-white/5
                  text-white/70
                "
                            >
                {skill}
              </span>
                        ))}

                    </div>

                </div>
                <Spreater/>
                {/*languages*/}
                <div>
                    <p className="uppercase font-bold text-lg">
                        languages
                        <span className="text-orange-500">
              .
            </span>
                    </p>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"grid grid-cols-2 gap-8"}><span className={"text-md font-heading"}>Burmase</span><span className={"text-sm"}>Native</span></p>
                        <p className={"grid grid-cols-2 gap-8"}><span className={"text-md font-heading"}>English</span><span className={"text-sm"}>Intermediate</span></p>
                    </div>
                </div>
            </div>
        </aside>
    );
}