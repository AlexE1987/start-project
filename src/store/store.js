export const authInitialState = {
  name: '',
  password: '',
  role: '',
  error: '',
  isLogin: false,
};

export const productEditInitialState = {
  id: '',
  title: '',
  description: '',
  inStock: '',

  titleError: '',
  descriptionError: '',
  inStockError: '',

  stateIsValid: false,
};

export let productEditErrors = {
  title: '',
  description: '',
  inStock: '',
};

export const productEditeData = {
  id: '',
  title: '',
  description: '',
  image: '',
  cost: '',
  inStock: '',
};
