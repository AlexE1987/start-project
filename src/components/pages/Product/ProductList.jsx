import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Product.css';

import { getAllProducts, updateProductInStock } from '../../../api/api';
import { setAllproducts } from '../../../redux/actions/products';
// import store from '../../../redux/store';

const ProductList = ({ userRole }) => {
  const products = useSelector((store) => store.allProducts.products);
  const dispatch = useDispatch();
  const [isLoading, setISLoading] = useState(false);

  useEffect(() => {
    setISLoading(true);
    getAllProducts().then((products) => {
      dispatch(setAllproducts(products));
      setISLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        products.map(({ id, title, image, price }, ...product) => (
          <React.Fragment key={id}>
            <div className="product__container">
              <Link to={`/products/${id}`}>
                <h1 className="product__title">{title}</h1>
              </Link>
              <div className="image-container">
                <img className="product-image" src={image} alt="productImage" />
              </div>
              <div>
                <p className="product-cost">Cost: {price} $</p>

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
