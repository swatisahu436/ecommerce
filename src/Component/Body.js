import { products } from "../Utils/mockData";
import Card from "./Cards";
 import Silder from "./Silder";


const Body = () => {
    console.log(products); // Add this line to see the content of products
    return (
    <div>
                 <Silder/>
        <div className="cardLine">
   
            {products?.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
};

export default Body;
