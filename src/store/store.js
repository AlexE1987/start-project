export const customer = {
  name: 'customer',
  password: 'customer',
};

export const admin = {
  name: 'admin',
  password: 'admin',
};

export const authState = {
  name: '',
  password: '',
  role: 'admin',
  error: '',
  isLogin: false,
};

export const productEditInitialState = {
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
