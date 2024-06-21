import React from 'react';
import "./ProductCard.css"

const ProductCard = ({ name, image, description, bgColor }) => {
  return (
    <div className="product-card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={name}  className='image'/>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
