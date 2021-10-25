import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProductInStock, updateEditProduct, getProductById } from '../../../api/api';
import { setSelectedProduct } from '../../../redux/actions/products';
import './Product.css';
import ProductContent from './ProductContent';
import ProductEdit from './ProductEdit';

const Product = ({ userRole }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const productData = useSelector((store) => store.selectedProduct.product);

  const [product, setProduct] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductById(params.id)
      .then((product) => {
        dispatch(setSelectedProduct(product));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.id]);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const updateProduct = (newProduct) => {
    setProduct(newProduct);
  };

  return (
    <div>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {userRole === 'admin' && (
            <button
              className={isEdit ? 'product-button_is-edit' : 'product-button product-button_edit'}
              onClick={toggleEdit}>
              Edit product
            </button>
          )}
          {!isEdit ? (
            <>
              <ProductContent
                title={productData.title}
                image={productData.image}
                description={productData.description}
                inStock={productData.inStock}
                cost={productData.price}
                userRole
              />
              {userRole ? (
                <button
                  className="product-button"
                  onClick={() => {
                    updateProductInStock(productData, setProduct);
                  }}>
                  {productData.inStock <= 0 ? 'not available' : 'add to list'}
                </button>
              ) : (
                <button className="product-button">Please login for add product</button>
              )}
            </>
          ) : (
            <ProductEdit
              product={productData}
              image={productData.image}
              updateEditProduct={updateEditProduct}
              toggleEdit={toggleEdit}
              updateProduct={updateProduct}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Product;
