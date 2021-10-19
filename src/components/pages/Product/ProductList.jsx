import React, { useState, useEffect } from 'react';

import Product from './Product';

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      let product = await fetch('http://localhost:3000/product')
        .then((response) => response.json())
        .then((json) => json);

      setPosts(product);
      setLoading(false);
    };

    loadPost();
  }, []);

  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        posts.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            cost={product.cost}
            description={product.description}></Product>
        ))
      )}
    </div>
  );
};

export default ProductList;
