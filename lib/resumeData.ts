import {
    certificateList,
    MyStatus,
    profile,
    projects
} from "@/lib/fakeData";

import type {
    ResumeData,
    ResumeRole
} from "./types";

const skills={
    fullStack: [
        "Next.js",
        "React",
        "zustand",
        "React Redux",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Git",
    ],
    frontend:[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "GSAP",
        "Responsive Design",
        "Accessibility",
        "Git",
    ],
    backend: [
        "Next.js",
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Authentication",
        "API Design",
        "Git",
        "Docker"
    ]
}
export const resumeData: Record<
    ResumeRole,
    ResumeData
> = {

    "full-stack": {
        role: profile.role[0],

        summary:
            "Junior full-stack developer focused on building modern, fast and reliable web applications with React, Next.js, TypeScript and backend technologies.",

        skills:skills.fullStack,

        projects: projects,
        education:MyStatus.education,
        certification:certificateList.filter((cert)=>skills.fullStack.includes(cert.title))
    },


    frontend: {
        role: profile.role[1],

        summary:
            "Junior front-end developer focused on building responsive, accessible and interactive user interfaces with React, Next.js, TypeScript and modern CSS.",

        skills:skills.frontend,

        projects: projects.filter((project) =>
            project.technologies.some((technology) =>skills.frontend.includes(technology)
            )
        ),
        education:MyStatus.education,
        certification:certificateList.filter((cert)=>skills.frontend.includes(cert.title))
    },


    backend: {
        role: profile.role[2],

        summary:
            "Junior backend developer focused on building APIs, data-driven applications and reliable server-side systems.",

        skills:skills.backend,

        projects: projects.filter((project) =>
            project.technologies.some((technology) =>skills.backend.includes(technology)
            )
        ),
        education:MyStatus.education,
        certification:certificateList.filter((cert)=>skills.backend.includes(cert.title))
    },
};