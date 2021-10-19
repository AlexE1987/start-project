import React from 'react';

const Product = ({ title, description, image, cost }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="productImage" width="200" />
      <p>Cost: {cost}</p>
      <p>Description: {description}</p>
      <button>add to list</button>
    </div>
  );
};

export default Product;
