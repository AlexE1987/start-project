import { ActionTypes } from '../../constants/constants';

export const setAllproducts = (productsData) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: productsData,
  };
};
