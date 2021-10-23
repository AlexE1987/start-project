import React from 'react';

const ProductEdit = ({
  getInputsValues,
  handleFormSubmit,
  productEdit,
  productEditErrors,
  image,
}) => {
  return (
    <form
      style={{ width: '500px', display: 'flex', flexDirection: 'column' }}
      action=""
      onSubmit={handleFormSubmit}>
      <div>
        <input name="title" type="text" value={productEdit.title} onChange={getInputsValues} />
      </div>
      <p>{productEditErrors.title}</p>
      <img src={image} alt="productImage" width="200" />
      <textarea
        name="description"
        value={productEdit.description}
        cols="20"
        rows="10"
        onChange={getInputsValues}></textarea>
      <p>{productEditErrors.description}</p>
      <input name="inStock" type="text" value={productEdit.inStock} onChange={getInputsValues} />
      <p>Cost: {productEditErrors.inStock}</p>
      <button>SAVE</button>
    </form>
  );
};

export default ProductEdit;
