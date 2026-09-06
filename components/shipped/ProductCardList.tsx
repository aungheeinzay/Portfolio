import { projects} from "@/lib/fakeData";
import ProductCard from "@/components/shipped/productCard";

export default function ProductCardList(){
    return (
        <main>
            {
                projects.map((project,i)=>(
                    <ProductCard key={i} project={project} projectNumber={i+1}/>
                ))
            }
        </main>
    )
}