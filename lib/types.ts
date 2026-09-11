export type ResumeRole =
    | "full-stack"
    | "frontend"
    | "backend";


export type ResumeProject = {
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
};


export type ResumeData = {
    role: string;
    summary: string;
    skills: string[];
    projects: ResumeProject[];
    education:string;
    certification:{
        title:string;
        url:string;
        sourceLink:string;
        source:string;
    }[]
};


export type ResumeProps = {
    role: ResumeRole;
    data: ResumeData;
};