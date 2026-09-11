export const profile={
    name:"Aung Heein Zay",
    headline:"",
    role:["FULL-STACK DEVELOPER","FRONT-END DEVELOPER","BACKEND DEVELOPER"],
    description:"  Zero years on paper, one hundred percent on fire. I learn full-stack development in public and turn fresh ideas into shipped, fast, well-built products.",
    location:"MYANMAR",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gxmuRJMonTfk1TleVhCbVsB-DZLFytWLdr3vCrK87oi-JGnHk3uQzcxy&s=10",
    socials:{
        facebook:"https://www.facebook.com/aung.h.zay.9",
        gmail:"mailto:ahz007aunghz@gmail.com?subject=Portfolio%20Contact&body=Hello%20Ahz,%0A%0AI%20would%20like%20to%20contact%20you.",
        linkedin:"https://www.linkedin.com/in/aung-heein-zay-ahz-875276365/",
        telegram:"https://t.me/AungHeein",
        web:"https://portfolio-steel-eight-1lp6tkr2rc.vercel.app/",
        github:"https://github.com/aungheeinzay",
    },
    toolkitData :[
        {
            category: "Frontend",
            items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3","others..."],
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "REST APIs", "GraphQL","socket.io"],
        },
        {
            category: "Data",
            items: ["MongoDB","Mongoose", "SQL", "Prisma","Drizzle"],
        },
        {
            category: "Workflow",
            items: ["Git","Docker", "Debugging", "Performance", "Testing"],
        },
    ]
}
export const projects = [
{
    id: "1",
    title: "DevForum — Developer Social Platform",
    slug: "devforum-developer-social-platform",

    description:
     "A modern full-stack developer community platform focused on content sharing, social interactions, and scalable event-driven features, built with Next.js 16, TypeScript, Prisma, PostgreSQL, and Better Auth.",
    image: "https://iili.io/nfENMzX.png",

    problem:
       "Needed a scalable platform for developer content, social interactions, and real-time-like event handling without tightly coupling UI components.",
    solution:
       "Built with Next.js 16, Better Auth, Tiptap, Prisma/PostgreSQL, reactions, comments, hashtags, and an Observer Pattern for notifications.",
    architecture:
        ": App Router + Server Actions + React Server Components with feature-based modules, type-safe validation, relational data modeling, and event-driven UI updates.",
    githubUrl:
        "https://github.com/aungheeinzay/Next-js-16.git",

    liveUrl:
        "https://next-js-16-ry6j.vercel.app/",

    technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "Server Actions",
        "next-safe-action",
        "Zod",
        "Tiptap",
        "UploadThing",
        "Resend",
        "React Hook Form",
        "Observer Pattern"
    ],

    featured: true
},

{
    id: "2",
    title: "SnapShop — Phone E-Commerce Platform",
    slug: "snapshop-phone-ecommerce-platform",
    description:
        "A full-stack e-commerce platform with authentication, product variants, image management, orders, Stripe payments, and an admin dashboard.",
    image: "https://iili.io/nfGKBt4.png",
    problem:
        "Building a complete shopping workflow with secure authentication, flexible product variants, order management, and online payments.",
    solution:
        "Built a scalable Next.js architecture using Drizzle, PostgreSQL, NextAuth, Stripe, UploadThing, and server-side actions for secure business logic.",
    architecture:
        "Next.js App Router with Server Actions, Drizzle ORM, Neon PostgreSQL, NextAuth, Zustand, Stripe, UploadThing, and Resend.",
    githubUrl:
        "https://github.com/aungheeinzay/PhoneSaleSnapShop.git",
    liveUrl:
        "https://snapshop-six.vercel.app/",
    technologies: [
        "Next.js",
        "TypeScript",
        "Shadcn",
        "Drizzle ORM",
        "PostgreSQL",
        "NextAuth",
        "Stripe",
        "Zustand",
        "UploadThing"
    ],
    featured: true
},

    {
        id: "3",
        title: "Hotel Booking & Management System",
        slug: "hotel-booking-management-system",
        description: "A production-grade, full-stack enterprise solution built for complex hotel hospitality operations, real-time availability, and automated workflow management.",
        image: "https://iili.io/nf151Fj.png",
        problem: "Handling complex date-range overlaps across timezones, dynamic pricing, and real-time state synchronization across admin dashboards without performance lagging.",
        solution: "Engineered a decoupled GraphQL architecture with strict UTC standardization, MongoDB aggregation pipelines, and WebSocket subscription networks for sub-second updates.",
        architecture: "React & Apollo Client frontend interacting with a Node.js/Express v5 GraphQL API, secured with custom RBAC HOCs, and backed by MongoDB (Mongoose v9) with Stripe/Cloudinary integrations.",
        githubUrl: "https://github.com/aungheeinzay/Hotel-Management-System.git",
        liveUrl: "https://hotel-booking.example.com",
        technologies: [
            "React",
            "Shadcn",
            "TypeScript",
            "GraphQL",
            "Apollo Client",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "WebSockets",
            "Stripe"
        ],
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
    education:"B.Sc. Computer Science — UCSS (attented through 4th year)"
}

export const goalsList=[
    {
        year:"2021",
        content:"Started learning full-stack development in public",
        goal:"Master the fundamentals: HTML, CSS, JavaScript and Git."
    },
    {
        year:"2024",
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
        title:"Next.js",
        url:"https://i.postimg.cc/bJQSHMgj/Screenshot-2026-09-10-113405.png",
        source:"CODE HUB MM",
        sourceLink:"https://www.codehubmm.com/"
    },
    {
        title:"GraphQL",
        url:"https://i.postimg.cc/y8tJqBpG/Screenshot-2026-09-10-113636.png",
        source:"CODE HUB MM",
        sourceLink:"https://www.codehubmm.com/"
    }
]