import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../../../api/api';
import { inputsValidateProductEdit } from '../../utils/validations';
// import { productEditState, porductEditErrors } from '../../../store/store';
import { productEditErrors, productEditState } from '../../../store/store';

const Product = ({ userRole }) => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productEdit, setProductEdit] = useState(productEditState);
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
    inputsValidateProductEdit(productEdit, productEditErrors);
    if (productEditErrors.title || productEditErrors.description || productEditErrors.inStock) {
      setProductEdit((prevState) => ({
        ...prevState,
        titleError: productEditErrors.title,
        description: productEditErrors.description,
        inStock: productEditErrors.inStock,
        stateIsValid: false,
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
            <>
              <h1>{product.title}</h1>
              <img src={product.image} alt="productImage" width="200" />
              <p>Description: {product.description}</p>
              <p>Available: {product.inStock}</p>
              <p>Cost: {product.cost}</p>
            </>
          ) : (
            <form action="" onClick={handleFormSubmit}>
              <input
                name="title"
                type="text"
                value={productEdit.title}
                onChange={getInputsValues}
              />
              <img src={product.image} alt="productImage" width="200" />
              <textarea
                name="description"
                value={productEdit.description}
                cols="20"
                rows="10"
                onChange={getInputsValues}>
                {product.description}
              </textarea>
              <input
                name="inStock"
                type="text"
                value={productEdit.inStock}
                onChange={getInputsValues}
              />
              <p>Cost: {product.cost}</p>
              <button>SAVE</button>
            </form>
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
