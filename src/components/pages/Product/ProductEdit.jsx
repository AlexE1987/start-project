import React, { useState, useEffect } from 'react';
import {} from '../../../store/store';
import {
  validateTitle,
  validateDescription,
  validateInStock,
  errorsChecking,
} from '../../utils/validations';
import { updateEditProduct } from '../../../api/api';

let productEditErrors = {
  title: '',
  description: '',
  inStock: '',
};
const ProductEdit = ({ product, image, toggleEdit, updateProduct }) => {
  const [productEdit, setProductEdit] = useState(product);
  const [editIsValid, setEditIsValid] = useState('');

  const getInputsValues = ({ target: { value, name } }) => {
    setProductEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    validateTitle(productEdit, productEditErrors);
  });

  useEffect(() => {
    validateDescription(productEdit, productEditErrors);
  });
  useEffect(() => {
    validateInStock(productEdit, productEditErrors);
  });

  useEffect(() => {
    if (!errorsChecking(productEditErrors)) {
      setEditIsValid(false);
    } else setEditIsValid(true);
  });

  const sendNewProductData = () => {
    updateEditProduct(productEdit);
    updateProduct(productEdit);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIsValid) {
      sendNewProductData();
      toggleEdit();
    }
  };

  return (
    <>
      <form
        style={{ width: '500px', display: 'flex', flexDirection: 'column' }}
        onSubmit={handleFormSubmit}>
        <input name="title" type="text" value={productEdit.title} onChange={getInputsValues} />
        <p>{productEditErrors.title}</p>
        <img src={image} alt="productImage" width="200" />
        <textarea
          name="description"
          value={productEdit.description}
          cols="10"
          rows="10"
          onChange={getInputsValues}></textarea>
        <p>{productEditErrors.description}</p>
        <input name="inStock" type="text" value={productEdit.inStock} onChange={getInputsValues} />
        <p>{productEditErrors.inStock}</p>
        <button>SAVE</button>
      </form>
    </>
  );
};

export default ProductEdit;
