import TitleHeading from "@/components/heading/heading";
import ProductCardList from "@/components/shipped/ProductCardList";

export default function Shipped(){
    return (
        <section id={"projects"} className={" relative grid grid-cols-1 lg:grid-cols-12"} >

            <div className={"hidden md:block col-span-2 stripe-bg"}></div>
            <div className={"w-full col-span-8 mx-auto bg-primary p-6 z-10"}>
                <TitleHeading section={"03 - selected work"} heading={"Things I Have Shipped"}/>
                <ProductCardList/>
            </div>
            <div className={"hidden md:block col-span-2 stripe-bg"}></div>
        </section>
    )
}