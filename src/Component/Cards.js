import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div id="container">
      <Link to={`/phone/${product.id}`} className="hidden-link">
        <img className="img_mobile" src={product.image} alt={product.name}  />
        <h2>{product.name}</h2>
        <p>Rs.{product.price}</p>
      </Link> 
    </div>
  );
};

export default Card;




//here product variable is just a variable (it can be x,y,z),the card.js file is imported in body.js file ,where it is use as identification of each productdescription:product


