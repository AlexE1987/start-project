import React from 'react';
import ProductList from '../Product/ProductList';
import './Home.css';

const Home = ({ userRole }) => {
  return (
    <div className="home__wrapper">
      <ProductList userRole={userRole} />
    </div>
  );
};

export default Home;
