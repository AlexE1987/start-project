import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProductInStock, updateEditProduct, getProductById } from '../../../api/api';
import { setSelectedProduct } from '../../../redux/actions/products';
import ProductContent from './ProductContent';
import ProductEdit from './ProductEdit';

const Product = ({ userRole }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const productData = useSelector((store) => store.selectedProduct.product);

  // const [product, setProduct] = useState([]);
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
  // useEffect(() => {
  //   const loadProduct = async () => {
  //     setIsLoading(true);
  //     let productData = await fetch(`http://localhost:3000/products/${params.id}`)
  //       .then((response) => response.json())
  //       .then((data) => data);
  //     setProduct(productData);
  //     setIsLoading(false);
  //   };

  //   loadProduct();
  // }, [params.id]);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  // const updateProduct = (newProduct) => {
  //   setProduct(newProduct);
  // };

  return (
    <div>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {userRole === 'admin' && <button onClick={toggleEdit}>EDIT</button>}
          {!isEdit ? (
            <ProductContent
              title={productData.title}
              image={productData.image}
              description={productData.description}
              inStock={productData.inStock}
              cost={productData.cost}
              userRole
            />
          ) : (
            <ProductEdit
              product={productData}
              image={productData.image}
              updateEditProduct={updateEditProduct}
              toggleEdit={toggleEdit}
              // updateProduct={updateProduct}
            />
          )}

          {userRole ? (
            <button
              onClick={() => {
                // updateProductInStock(product, setProduct);
              }}>
              {productData.inStock <= 0 ? 'not available' : 'add to list'}
            </button>
          ) : (
            <button>Please sign in for add product</button>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
