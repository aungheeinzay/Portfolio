export const profile={
    name:"Aung Heein Zay",
    headline:"",
    description:"  Zero years on paper, one hundred percent on fire. I learn full-stack development in public and turn fresh ideas into shipped, fast, well-built products.",
    location:"rakhine",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gxmuRJMonTfk1TleVhCbVsB-DZLFytWLdr3vCrK87oi-JGnHk3uQzcxy&s=10",
}
export const projects = [
    {
        id: "1",
        title: "E-Commerce Platform",
        slug: "e-commerce-platform",
        description: "A full-featured modern online store with payment integration and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176670c?auto=format&fit=crop&w=800&q=80",
        problem: "Local small businesses lacked an affordable, fast, and easy-to-manage digital storefront.",
        solution: "Built a scalable Next.js e-commerce platform with Stripe integration and Tailwind CSS.",
        architecture: "Next.js App Router frontend communicating with Node.js backend API and PostgreSQL database.",
        githubUrl: "https://github.com/username/ecommerce",
        liveUrl: "https://ecommerce.example.com",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        featured: true
    },
    {
        id: "2",
        title: "Task Management App",
        slug: "task-management-app",
        description: "Collaborative real-time task manager for remote development teams.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        problem: "Remote teams struggle with tracking real-time updates across multiple disjointed tools.",
        solution: "Developed a real-time dashboard using WebSockets and React for seamless task tracking.",
        architecture: "React frontend with WebSockets connecting to a Go backend service and MongoDB storage.",
        githubUrl: "https://github.com/username/task-app",
        liveUrl: "https://task-app.example.com",
        technologies: ["React", "Go", "MongoDB", "WebSockets"],
        featured: false
    },
    {
        id: "3",
        title: "AI Content Generator",
        slug: "ai-content-generator",
        description: "SaaS platform that generates marketing copy and blog posts using LLMs.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        problem: "Content creators spend too much time brainstorming and drafting repetitive marketing texts.",
        solution: "Integrated OpenAI API into a fast web application to automate article and ad copy generation.",
        architecture: "Vue.js frontend interacting with Python FastAPI backend and Redis caching layer.",
        githubUrl: "https://github.com/username/ai-generator",
        liveUrl: "https://ai-generator.example.com",
        technologies: ["Vue.js", "Python", "FastAPI", "OpenAI API"],
        featured: true
    }
];

export const socials=["facebook","instagram","twitter","linkedin","github"];

export const aboutParagraphs=[
    "I am Aung Heein Zay, a junior full-stack developer based in Yangon. I build fast, clean web apps with React, Node and TypeScript, and I learn the craft openly — shipping small projects,sharing progress and writing about what works.",
    "My focus is the fundamentals done well: semantic markup, sensible state, accessible UI and a build that stays lean. I care about readability and shipping something real over chasing every new tool.",
    "Right now I am open to internships, junior roles and freelance work where I can keep growing and contribute useful code from day one."
]

export const MyStatus={
    location:"Rakhine, Myanmar",
    openTo:"Internships, junior roles, freelence",
    mode:"Remote",
    education:"B.Sc. Computer Science — UCSS (attented 4th year)"
}

export const goalsList=[
    {
        year:"2021",
        content:"Started learning full-stack development in public",
        goal:"Master the fundamentals: HTML, CSS, JavaScript and Git."
    },
    {
        year:"2025",
        content:"Built first React + Node projects and a REST API",
        goal:"Ship 5 small apps and learn TypeScript end-to-end.",
    },
    {
        year:"2026",
        content:"Portfolio launched, open to internships & freelance",
        goal:"Land a junior role and contribute real production code."
    }
]

export const certificateList=[
    {
        title:"Next Js",
        url:"https://i.postimg.cc/bJQSHMgj/Screenshot-2026-09-10-113405.png",
        source:"CODE HUB MM",
        sourceLink:"https://www.codehubmm.com/"
    },
    {
        title:"GraphQl",
        url:"https://i.postimg.cc/y8tJqBpG/Screenshot-2026-09-10-113636.png",
        source:"CODE HUB MM",
        sourceLink:"https://www.codehubmm.com/"
    }
]