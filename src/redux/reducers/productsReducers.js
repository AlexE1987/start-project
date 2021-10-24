import { ActionTypes } from '../../constants/constants';

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS: {
      return { products: [...payload] };
    }
    default:
      return state;
  }
};
