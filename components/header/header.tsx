"use client";
import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "@/hooks/isMobile";
import { FaBurger } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import {useRouter} from "next/navigation";



const sections = ["skills", "projects", "connect","about","credentials","content"];

export default function Header() {
    const router = useRouter()
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="mx-auto w-full border-b border-b-orange-200 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-lg shadow-black/10 fixed top-0 z-50">
            <div className="w-full lg:w-8/12 mx-auto flex justify-between items-center">
                <button
                    onClick={()=>router.push("/")}
                    className="font-heading font-bold text-xl tracking-wider text-white">
                    AHZ<span className="text-orange-500">.</span>
                </button>

                {isMobile ? (
                    <div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer focus:outline-none p-1"
                            aria-label="Open Menu"
                        >
                            <FaBurger size={25} className="text-orange-500 hover:text-orange-300 transition-colors" />
                        </button>

                        {isOpen && (
                            <div
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                                onClick={() => setIsOpen(false)}
                            />
                        )}

                        {/* Mobile Menu Drawer (Drawer တစ်ခုလုံးအတွက် bg-zinc-950 သုံးထားသည်) */}
                        <div
                            className={`
                                fixed
                                top-0
                                right-0
                                h-[100vh]
                                w-full
                                bg-primary
                                z-50
                                flex
                                flex-col
                                transform
                                transition-transform
                                duration-300
                                ease-in-out
                                ${isOpen ? "translate-x-0" : "translate-x-full"}
                            `}
                        >

                            <p className={"absolute bottom-1 left-[50%] -translate-x-1/2 text-sm font-heading "}>@aungheeinzay-portfolio</p>
                            {/* Drawer ထိပ်ပိုင်း (Header ကို သီးသန့်အရောင်ခွဲရန် bg-zinc-900 ကို အသုံးပြုထားသည်) */}
                            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                                <span className="font-heading font-bold text-lg text-white">
                                    Menu<span className="text-orange-500">.</span>
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white cursor-pointer p-1"
                                    aria-label="Close Menu"
                                >
                                    <IoClose size={25} className="text-orange-500" />
                                </button>
                            </div>

                            {/* Menu လင့်ခ်များ (Drawer ကိုယ်ထည်) */}
                            <ul className="flex flex-col gap-4 p-6 h-full bg-black/10 overflow-y-auto">
                                {sections.map((label, index) => (
                                    <li
                                        key={label}
                                        className={`border-b border-white/10 transform transition-all duration-500 ease-out active:bg-primary ${
                                            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                        }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <Link
                                            href={`#${label}`}
                                            onClick={() => setIsOpen(false)}
                                            className="hover:text-orange-500 capitalize text-base text-gray-300 transition-colors block py-2"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                                <div
                                    className={`transform transition-all duration-500 ease-out mt-4 ${
                                        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                    }`}
                                    style={{ transitionDelay: `${sections.length * 100}ms` }}
                                >
                                    <Link
                                        href="/resume"
                                        onClick={() => setIsOpen(false)}
                                        className="capitalize text-sm bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-xl transition-colors text-white font-medium text-center block shadow-lg shadow-orange-500/20"
                                    >
                                        Resume
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <ul className="flex justify-center items-center gap-6">
                        {sections.map((label) => (
                            <li key={label}>
                                <button onClick={()=>{
                                    router.replace(`/#${label}`)
                                }}
                                    className="hover:text-orange-500 capitalize text-sm text-gray-300 transition-colors"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                        <Link
                            href="/blog"
                            className="capitalize text-sm text-gray-300 transition-colors block py-2"
                        >
                            blogs
                        </Link>
                        <Link
                            href="/resume"
                            className="capitalize text-sm bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-colors text-white font-medium"
                        >
                            Resume
                        </Link>
                    </ul>
                )}

            </div>

        </header>
    );
}