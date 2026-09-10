import TitleHeading from "@/components/heading/heading";
import CertificateCardList from "@/components/Credintials/CertificateCardList";

export default function Credentials(){
    return (
        <section className={"bg-primary w-full lg:w-8/12 mx-auto flex flex-col gap-4"}>
            <TitleHeading section={"06 - CREDENTIALS"} heading={"Certificates && credentials."}/>

        <CertificateCardList/>
        </section>
    )
}