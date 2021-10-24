import React, { useState } from 'react';
import { productEditeData } from '../../../store/store';
import { updateEditProduct } from '../../../api/api';
import { validateInputsProductEdit } from '../../utils/validations';
const ProductEdit = ({
  getInputsValues,
  handleFormSubmit,
  productEdit,
  product,
  productEditErrors,
  image,
  updateEditProduct,
}) => {
  return (
    <>
      <form
        style={{ width: '500px', display: 'flex', flexDirection: 'column' }}
        onSubmit={handleFormSubmit}>
        <div>
          <input name="title" type="text" value={productEdit.title} onChange={getInputsValues} />
        </div>
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
        <p>Cost: {productEditErrors.inStock}</p>
        <button>SAVE</button>
      </form>
    </>
  );
};

export default ProductEdit;
