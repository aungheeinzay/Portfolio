"use client";

import { useRef, useState } from "react";
import { resumeData } from "@/lib/resumeData";
import type { ResumeRole } from "@/lib/types";
import ResumeBio from "@/components/resume/ResumeBio";
import ResumeContent from "@/components/resume/ResumeContent";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import {TechButton} from "@/components/TeachButton";
import {FaDownload} from "react-icons/fa";

export default function Resume() {
    const resumeRef = useRef<HTMLDivElement>(null);
    const [role, setRole] = useState<ResumeRole>("full-stack");
    const data = resumeData[role];

    const roleToIndex: Record<ResumeRole, number> = {
        "full-stack": 0,
        "frontend": 1,
        "backend": 2,
    };

    const activeIndex = roleToIndex[role];

    const handleDownloadPDF = async () => {
        const element = resumeRef.current;
        if (!element) return;

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#0b0f19",
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = pageWidth - 20;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 10;

            pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`${role}-ahz-resume.pdf`);
        } catch (error) {
            console.error("PDF production error", error);
        }
    };

    return (
        <main className="pt-24 px-4 lg:w-8/10 mx-auto">

            <div className="flex justify-between items-center mb-8">


                <div className="relative inline-flex bg-zinc-900 border border-zinc-800 rounded-md p-1 gap-1">

                    <div
                        className="absolute top-1 bottom-1 left-1 bg-orange-500 rounded-md transition-all duration-300 ease-in-out"
                        style={{
                            width: 'calc(33.33% - 4px)',
                            transform: `translateX(${activeIndex * 100}%)`
                        }}
                    ></div>

                    {(["full-stack", "frontend", "backend"] as ResumeRole[]).map((r) => (
                        <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                role === r
                                    ? "text-white" 
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {r === "full-stack" ? "Full-Stack" : r === "frontend" ? "Frontend" : "Backend"}
                        </button>
                    ))}
                </div>

              <TechButton
                  onClick={handleDownloadPDF}
                  className={"bg-orange-500/10"}>
                  <p className={"flex gap-1"}><FaDownload/> download resume</p></TechButton>
            </div>


            <div
                key={role}
                ref={resumeRef}
                className="
                    grid
                    grid-cols-12
                    gap-8
                    p-8
                    bg-primary
                    transition-opacity
                    duration-500
                    ease-in-out
                    animate-in
                    fade-in-50
                "
            >
                <div className="col-span-4">
                    <ResumeBio
                        role={data.role}
                        summary={data.summary}
                        skills={data.skills}
                    />
                </div>

                <div className="col-span-8">
                    <ResumeContent
                        role={role}
                        data={data}
                    />
                </div>
            </div>

        </main>
    );
}