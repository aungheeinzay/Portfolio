import {certificateList} from "@/lib/fakeData";
import CertificateCard from "@/components/Credintials/CertificateCard";

export default function CertificateCardList(){
    return (
        <div className={"grid grid-cols-2 gap-4"}>
            {
                certificateList.map((certi)=>(
                    <CertificateCard key={certi.title} {...certi}/>
                ))
            }
        </div>
    )
}