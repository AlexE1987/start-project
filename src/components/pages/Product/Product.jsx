import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct, updateEditProduct } from '../../../api/api';
import { validateInputsProductEdit, errorsChecking } from '../../utils/validations';
import { productEditErrors, productEditInitialState } from '../../../store/store';
import ProductContent from './ProductContent';
import ProductEdit from './ProductEdit';

const Product = ({ userRole }) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [productEdit, setProductEdit] = useState(productEditInitialState); //!
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

  useEffect(() => {});
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
    // if (productEdit.stateIsValid) {
    updateEditProduct(product, productEdit);
    // }
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
              getInputsValues={getInputsValues}
              handleFormSubmit={handleFormSubmit}
              product
              productEdit
              productEditErrors={productEditErrors}
              image={product.image}
              updateEditProduct={updateEditProduct}
            />
          )}

          {userRole ? (
            <button
              onClick={() => {
                updateProduct(product, setProduct);
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
