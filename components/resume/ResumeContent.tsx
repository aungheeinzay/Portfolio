import type {
    ResumeProps
} from "@/lib/types";
import {FaGraduationCap} from "react-icons/fa";
import {RiCertificate2Fill} from "react-icons/ri";
import {Separator} from "@base-ui/react";


export default function ResumeContent({
                                          data,
                                      }: ResumeProps) {

    return (
        <section className="flex flex-col gap-8">

            {/* Profile */}
            <section>

                <p className="text-xs uppercase text-orange-500">
                    Profile
                </p>

                <h1 className="text-4xl font-bold mt-2">
                    {data.role}
                </h1>

                <p className="mt-4 text-white/60 leading-relaxed">
                    {data.summary}
                </p>

            </section>


            {/* Projects */}
            <section>

                <div className="flex items-center gap-2">

                    <p className="text-xs uppercase">
                        Selected Projects
                    </p>

                    <span className="text-orange-500">
                        .
                    </span>

                </div>


                <div className="mt-4 flex flex-col gap-6">

                    {data.projects.map((project) => (

                        <div className={"flex gap-2 justify-between border-b border-white/10"}   key={project.id}>
                            <article

                                className=" pb-5"
                            >

                                <h2 className="text-xl font-bold">
                                    {project.title}
                                </h2>


                                <p className="mt-2 text-sm text-white/60">
                                    {project.description}
                                </p>


                                <p className="mt-3 text-xs text-white/40">
                                    {project.architecture}
                                </p>


                                <div className="flex flex-wrap gap-2 mt-3">

                                    {project.technologies.map(
                                        (technology) => (

                                            <span
                                                key={technology}
                                                className="text-xs text-orange-500"
                                            >
                                            {technology}
                                        </span>

                                        )
                                    )}

                                </div>


                            </article>
                            <div className="flex flex-col gap-4 mt-3 text-sm">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 underline flex flex-col"
                                > <span>GitHub : </span>
                                    <span>{project.githubUrl}</span>
                                </a>

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 underline flex flex-col"
                                    >
                                        <span>Live Demo : </span>
                                        <span>{project.liveUrl}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}

                </div>

            </section>
            <section className={"grid grid-cols-2 gap-4 "}>
                <div className={"border border-white/10 p-4 space-y-2"}>
                    <h2 className={"flex gap-2 items-center text-lg font-heading"}><FaGraduationCap/> Education</h2>
                    <p>{data.education}</p>
                </div>
                <div className={"border border-white/10 p-4 space-y-2"}>
                    <h2  className={"flex gap-2 items-center text-lg font-heading"}><RiCertificate2Fill/> Certifications</h2>

                    <div>{data.certification.map((certi,i)=>(<div
                        key={i}
                        className={"grid grid-cols-2 gap-6 border border-white/10"}
                    >
                        <span

                            key={i}>{certi.title}</span>
                        <a href={certi.sourceLink} className={"text-orange-500 underline"}>{certi.source}</a>
                    </div>))}</div>
                </div>
            </section>
        </section>
    );
}