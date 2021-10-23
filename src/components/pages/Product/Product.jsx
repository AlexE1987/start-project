import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../../../api/api';
import { validateInputsProductEdit, errorsChecking } from '../../utils/validations';
import { productEditErrors, productEditInitialState } from '../../../store/store';
import ProductContent from './ProductContent';
import ProductEdit from './ProductEdit';

const Product = ({ userRole }) => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productEdit, setProductEdit] = useState(productEditInitialState);
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

  const getInputsValues = ({ target: { value, name } }) => {
    setProductEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    validateInputsProductEdit(productEdit, productEditErrors);

    if (!errorsChecking(productEditErrors)) {
      setProductEdit((prevState) => ({
        ...prevState,
        titleError: productEditErrors.title,
        descriptionError: productEditErrors.description,
        inStockError: productEditErrors.inStock,
      }));
    } else {
      setProductEdit((prevState) => ({ ...prevState, stateIsValid: true }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validateForm();
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
            />
          ) : (
            <ProductEdit
              getInputsValues={getInputsValues}
              handleFormSubmit={handleFormSubmit}
              productEdit={productEdit}
              productEditErrors={productEditErrors}
              image={product.image}
            />
          )}

          <button
            onClick={() => {
              updateProduct(product, setProduct);
            }}>
            {product.inStock <= 0 ? 'not available' : 'add to list'}
          </button>
        </>
      )}
    </div>
  );
};

export default Product;
