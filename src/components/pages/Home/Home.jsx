import React from 'react';
import ProductList from '../Product/ProductList';

const Home = ({ userRole }) => {
  return (
    <div>
      Home
      <ProductList userRole={userRole} />
    </div>
  );
};

export default Home;
