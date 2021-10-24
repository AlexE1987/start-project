import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { updateProductInStock } from '../../../api/api';
import './Product.css';

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
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        products.map((product) => (
          <React.Fragment key={product.id}>
            <div className="product__container">
              <Link to={`/products/${product.id}`}>
                <h1 className="product__title">{product.title}</h1>
              </Link>

              <img className="product-image" src={product.image} alt="productImage" />
              <div>
                <p className="product-cost">Cost: {product.cost}</p>

                {userRole ? (
                  <button
                    className="product-button"
                    onClick={() => {
                      updateProductInStock(product);
                    }}>
                    {product.inStock <= 0 ? 'not available' : 'add to list'}
                  </button>
                ) : (
                  <button className="product-button">Please sign in for add product</button>
                )}
              </div>
            </div>
          </React.Fragment>
        ))
      )}
    </>
  );
};

export default ProductList;
