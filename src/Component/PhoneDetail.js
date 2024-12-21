import React,{useContext} from 'react';
import { useParams } from 'react-router-dom'; 
import { products } from '../Utils/mockData';
import  {CartContext} from './CartContext';


const PhoneDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id); // Convert the string 'id' to a number
  const product = products.find(item => item.id === productId);
  const { addToCart } = useContext(CartContext);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = async() => {
    await addToCart(product);
    alert("product is add to cart");
};
  return (
    <div className='parti_container'>
      <div className='parti_class1'>
        <img className='Link_img' src={product.image} alt={product.name} />

      </div>
      <div className='parti_class2'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Rs.{product.price}</p>
        <div className='detail-button'>
          <div className='add-button'>
            <button className='button1'  onClick={handleAddToCart}>Add to cart</button></div>
          <div className='cart-button'>
            <button className='button2'>Buy now</button></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
