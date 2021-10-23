export const validateInputsForm = (auth, authState) => {
  if (auth.name === 'customer' && auth.password === 'customer') {
    authState.role = 'customer';
    authState.isLogin = true;
  }

  if (auth.name === 'admin' && auth.password === 'admin') {
    authState.role = 'admin';
    authState.isLogin = true;
  }
};

export const validateInputsProductEdit = (productEdit, productEditErrors) => {
  if (productEdit.title.trim().length > 30) {
    productEditErrors.title = 'too much symbols, max 30';
  } else {
    productEditErrors.title = '';
  }
  if (productEdit.description.trim().length > 600) {
    productEditErrors.description = 'too much symbols, max 600';
  } else {
    productEditErrors.description = '';
  }
  if (productEdit.inStock.trim().length > 30) {
    productEditErrors.inStock = 'too much symbols,max 30';
  } else {
    productEditErrors.inStock = '';
  }
};

export const errorsChecking = (productEditErrors) =>
  Object.values(productEditErrors).every((error) => error === '');
