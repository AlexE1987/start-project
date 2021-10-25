import { ActionTypes } from '../../constants/constants';

const initialState = {
  product: {},
};

export const selectedProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_PRODUCT: {
      return { product: { ...payload } };
    }
    default:
      return state;
  }
};

// export default selectedProductReducer;
