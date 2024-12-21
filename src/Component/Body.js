import { products } from "../Utils/mockData";
import Card from "./Cards";
 


const Body = () => {
    console.log(products); // Add this line to see the content of products
    return (
    
        <div className="cardLine">
            {products?.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Body;
