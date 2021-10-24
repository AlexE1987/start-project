import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProductInStock, updateEditProduct } from '../../../api/api';
import ProductContent from './ProductContent';
import ProductEdit from './ProductEdit';

const Product = ({ userRole }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

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
          {userRole === 'admin' && <button onClick={toggleEdit}>EDIT</button>}
          {!isEdit ? (
            <ProductContent
              title={product.title}
              image={product.image}
              description={product.description}
              inStock={product.inStock}
              cost={product.cost}
              userRole
            />
          ) : (
            <ProductEdit
              product={product}
              image={product.image}
              updateEditProduct={updateEditProduct}
              toggleEdit={toggleEdit}
              updateProduct={updateProduct}
            />
          )}

          {userRole ? (
            <button
              onClick={() => {
                updateProductInStock(product, setProduct);
              }}>
              {product.inStock <= 0 ? 'not available' : 'add to list'}
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
