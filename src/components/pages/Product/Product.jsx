import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  const data = {
    id: product.id,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    description:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    image: product.image,
    cost: 100,
    inStock: product.inStock--,
  };

  const updateProduct = async () => {
    const response = await fetch(`http://localhost:3000/products/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => data);
    setProduct(response);
  };

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
          <button onClick={updateProduct}>
            {product.inStock === 0 ? 'not available' : 'add to list'}
          </button>
        </>
      )}
    </div>
  );
};

export default Product;
