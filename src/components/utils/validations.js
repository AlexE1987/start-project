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

export const validateTitle = (productEdit, productEditErrors) => {
  if (productEdit.title.trim().length < 4) {
    productEditErrors.title = '';
  } else {
    productEditErrors.title = 'too much symbols, max 30';
  }
};

export const validateDescription = (productEdit, productEditErrors) => {
  if (productEdit.description.trim().length < 4) {
    productEditErrors.description = '';
  } else {
    productEditErrors.description = 'too much symbols, max 30';
  }
};

export const validateInStock = (productEdit, productEditErrors) => {
  if (productEdit.inStock.toString().trim().length < 4) {
    productEditErrors.inStock = '';
  } else {
    productEditErrors.inStock = 'too much symbols, max 30';
  }
};

export const errorsChecking = (productEditErrors) =>
  Object.values(productEditErrors).every((error) => error === '');
