import Spreater from "@/components/Line";

interface TitleHeadingProps{
    section:string
    heading:string
}
export default function TitleHeading({section,heading}:TitleHeadingProps){
    return (
        <div>
           <div className={"pb-4"}>
               <h3 className={"font-heading text-md opacity-50 uppercase"}>{section}</h3>
               <h1 className={"font-heading font-bold text-4xl"}>{heading}</h1>
           </div>
            <Spreater/>
        </div>
    )
}