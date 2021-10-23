import React from 'react';

const ProductContent = ({ title, image, description, inStock, cost }) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt="productImage" width="200" />
      <p>Description: {description}</p>
      <p>Available: {inStock}</p>
      <p>Cost: {cost}</p>
    </>
  );
};

export default ProductContent;
