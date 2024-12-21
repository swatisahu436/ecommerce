import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import { products } from '../Utils/mockData';


const CartPage = () => {
    const { cart, loading, removeFromCart } = useContext(CartContext);
   
      
    const cartItems = cart.map((productId) => {
        return products.find((product) => product.id === productId);
    });

    const handleDelete = (productId) => {
        removeFromCart(productId);
    };
    return (
        <div>
            <h1>Cart Items</h1>
            <ul>
            {cartItems.map((product,index) => (
                <li key={index} style={{ listStyleType: 'none' }}>
                     <div className='parti_container'  >
                     <div className='parti_class1' style={{width:'400px',margin:'8px'}}>
                       <img className='Link_img' style={{ height: '200px',width:'200px' }}src={product.image} alt={product.name} />
                     </div>
                        <div className='parti_class2'>
                         <h1>{product.name}</h1>
                         <p>{product.description}</p>
                         <p>Rs.{product.price}</p>
                        </div>
                        <button style={{height:'40px',width:'80px',marginTop:'90px', backgroundColor: 'yellow',  fontWeight: 'bold' }}  onClick={() => handleDelete(product.id) }>Delete</button>
                    </div>
                    </li>
            ))}
         
            </ul>
        </div>
    );
};

export default CartPage;
