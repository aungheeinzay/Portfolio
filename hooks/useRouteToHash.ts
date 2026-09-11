import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export function useHash(hashvariable:string | null){
    const [hash,setHash]=useState(hashvariable)
    const pathname = usePathname()
    const router = useRouter()
    useEffect(() => {
       if (hash){
           if (pathname){
               router.replace(`/#${hash}`)
           }else {
               router.replace(`#${hash}`)
           }
       }
    }, [pathname,hash]);
    return [hash,setHash] as const
}