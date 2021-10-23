export const validateInputsForm = (auth, authState, admin, customer) => {
  if (auth.name === '') {
    auth.error = 'error';
  } else {
    auth.error = '';
  }
  console.log('error', auth.error);
  if (auth.name === customer.name && auth.password === customer.password) {
    authState.role = 'customer';
    authState.isLogin = true;
  }

  if (auth.name === admin.name && auth.password === admin.password) {
    authState.role = 'admin';
    authState.isLogin = true;
  }
};

export const validateInputsProductEdit = (productEdit, productEditErrors) => {
  if (productEdit.title.trim().length > 5) {
    productEditErrors.title = 'too much symbols';
  } else {
    productEditErrors.title = '';
  }
  if (productEdit.description.trim().length > 5) {
    productEditErrors.description = 'too much symbols';
  } else {
    productEditErrors.description = '';
  }
  if (productEdit.inStock.trim().length > 5) {
    productEditErrors.inStock = 'too much symbols';
  } else {
    productEditErrors.inStock = '';
  }
};

export const errorsChecking = (productEditErrors) =>
  Object.values(productEditErrors).every((error) => error === '');
