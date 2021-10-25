import { ActionTypes } from '../../constants/constants';

export const setAllproducts = (productsData) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: productsData,
  };
};

export const setSelectedProduct = (productData) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT,
    payload: productData,
  };
};
