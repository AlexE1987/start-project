import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../../../api/api';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      let productData = await fetch(`http://localhost:3000/products/${params.id}`)
        .then((response) => response.json())
        .then((data) => data);
      setProduct(productData);
      setIsLoading(false);
    };

    loadProduct();
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt="productImage" width="200" />
          <p>Description: {product.description}</p>
          <p>Cost: {product.cost}</p>
          <p>Available: {product.inStock}</p>
          <button
            onClick={() => {
              updateProduct(product, setProduct);
            }}>
            {product.inStock <= 0 ? 'not available' : 'add to list'}
          </button>
        </>
      )}
    </div>
  );
};

export default Product;
