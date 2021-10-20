import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
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
            <h1>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h1>
            <img src={product.image} alt="productImage" width="200" />
            <p>Cost: {product.cost}</p>
            <button>{product.inStock === 0 ? 'not available' : 'add to list'}</button>
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default ProductList;
