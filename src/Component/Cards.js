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
