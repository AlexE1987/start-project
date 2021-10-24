import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateProductInStock } from '../../../api/api';

const ProductList = ({ userRole }) => {
  const [isLoading, setISLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      setISLoading(true);
      let products = await fetch('http://localhost:3000/products')
        .then((response) => response.json())
        .then((data) => data);

      setProducts(products);
      setISLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        products.map((product) => (
          <React.Fragment key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h1>{product.title}</h1>
            </Link>

            <img src={product.image} alt="productImage" width="200" />
            <p>Cost: {product.cost}</p>

            {userRole ? (
              <button
                onClick={() => {
                  updateProductInStock(product);
                }}>
                {product.inStock <= 0 ? 'not available' : 'add to list'}
              </button>
            ) : (
              <button>Please sign in for add product</button>
            )}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default ProductList;
