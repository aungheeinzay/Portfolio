"use client"
import {usePathname, useSearchParams} from "next/navigation";

export default function changePath(session:string){
    if (!window)return
    let url;
    const host = window.location.host
    const pathname =window.location.pathname
    if (pathname){

        url =`/${host}#${session}`
    }else {
        url=`${host}#${session}`
    }
    return url
}