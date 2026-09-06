import TitleHeading from "@/components/heading/heading";

const toolkitData = [
    {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
        category: "Data",
        items: ["MongoDB", "SQL", "Prisma"],
    },
    {
        category: "Workflow",
        items: ["Git", "Debugging", "Performance", "Testing"],
    },
];

export default function Tools(){
    return (
        <section id={"skills"} className={"w-full lg:max-w-8/12 mx-auto relative p-6"}>
            <TitleHeading section={"02 — TOOLKIT"} heading={"The Stack I Build With Every Day"}/>


            <div className={"mt-8 relative z-10 bg-primary stripe-bg border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10"}>
                {
                    toolkitData.map((tool)=>(
                        <div key={tool.category} className="p-6 flex flex-col gap-3 stripe-bg">
                            <h3 className="text-orange-500 font-mono text-sm font-bold uppercase tracking-wider">
                                {tool.category}
                            </h3>
                            <div className="flex flex-col gap-2">
                                {
                                    tool.items.map((it)=>(
                                        <p key={it} className="text-gray-300 text-sm font-sans">
                                            {it}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={"absolute top-0 left-0  w-full h-full grid grid-cols-3 "}>
                <div className={"border-[0.8px] border-white/10"}></div>
                <div className={"border-[0.8px] border-white/10"}></div>
                <div className={"border-[0.8px] border-white/10"}></div>
                {/*<div className={"border-[0.8px] border-white/10"}></div>*/}
            </div>
        </section>
    );
}