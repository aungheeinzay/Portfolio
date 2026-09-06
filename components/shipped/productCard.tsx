"use client";

import { useState } from "react";
import Badges from "@/components/Badge";
import {GoChevronDown, GoChevronUp} from "react-icons/go";

interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    problem: string;
    solution: string;
    architecture: string;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
    featured: boolean;

}

interface ProjectCardProps {
    project: Project;
    projectNumber: number;
}

export default function ProjectCard({ project,projectNumber }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    console.log("isHovered",isHovered)

    return (
        <div
            className="group hover:bg-[#1f1209] w-full p-6 border-b border-white/10 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={()=>setIsHovered(!isHovered)}
        >
            {/* --- Default View (Always Visible) --- */}
            <div className="grid grid-cols-12 gap-4">
                <h1 className="cols-span-1 text-lg font-heading">{`0${projectNumber}`}</h1>
                <div className={"col-span-10"}>
                    <h3 className="text-xl font-heading font-semibold text-white tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-md text-neutral-400 mt-2">
                        {project.description}
                    </p>
                </div>
                <div className="grid place-items-center">
                    <GoChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                            isHovered ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </div>

            </div>

            {/* --- Expanded View (Clean Two-Column Professional Layout) --- */}
            <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isHovered
                        ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/10"
                        : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0"
                }`}
            >
                <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Image & Links */}
                    <div className="space-y-4">
                        <div className="w-full h-56 overflow-hidden rounded-lg border border-white/10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:text-orange-400 text-xs font-medium transition-colors"
                            >
                                GitHub Repository →
                            </a>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:text-orange-400 text-xs font-medium transition-colors"
                            >
                                Live Demo →
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Details & Tech Stack */}
                    <div className="space-y-4 text-neutral-300 text-sm">
                        <p>
                            <strong className="text-white">Problem:</strong> {project.problem}
                        </p>
                        <p>
                            <strong className="text-white">Solution:</strong> {project.solution}
                        </p>
                        <p>
                            <strong className="text-white">Architecture:</strong> {project.architecture}
                        </p>
                        <div className="pt-2">
                            <p className="text-xs text-neutral-400 mb-2 font-medium uppercase tracking-wider">Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badges key={tech} text={tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}