import Link from "next/link";
import {CiShare1} from "react-icons/ci";

interface CertificateCardProps{
    title:string;
    url:string
    source:string
    sourceLink:string
}
export default function CertificateCard({title, url,source,sourceLink}:CertificateCardProps){
    return (
        <div className={"rounded-md border border-white/10"}>
               <div className={"aspect-video"}>
                   <img src={url} alt={"certificates"} className={"w-full object-cver"}/>
               </div>
            <div className={"flex flex-col gap-2 p-4"}>
                <p className={"py-4 border-b border-white/10 text-xl font-heading text-orange-500"}>{title}</p>
                <Link className={"flex items-center gap-2 hover:text-orange-500 hover:underline"} href={sourceLink}>{source} <CiShare1/></Link>
            </div>
        </div>
    )
}