import React, { useState, useEffect } from 'react';
import './Product.css';

import { validateTitle, validateDescription, errorsChecking } from '../../utils/validations';
import { updateEditProduct } from '../../../api/api';

let productEditErrors = {
  title: '',
  description: '',
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
    <div className="edit__container">
      <form className="edit-form" onSubmit={handleFormSubmit}>
        <input
          className="edit-field"
          name="title"
          type="text"
          value={productEdit.title}
          onChange={getInputsValues}
        />
        <p>{productEditErrors.title}</p>
        <img src={image} alt="productImage" width="200" />
        <textarea
          className="edit-field edit-field_description"
          name="description"
          value={productEdit.description}
          cols="10"
          rows="10"
          onChange={getInputsValues}></textarea>
        <p>{productEditErrors.description}</p>

        <button className="product-button product-button_save">SAVE</button>
      </form>
    </div>
  );
};

export default ProductEdit;
