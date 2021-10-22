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

export const inputsValidateProductEdit = (productEditState, productEditErrors) => {
  if (productEditState.title.trim().length > 30) {
    productEditErrors.title = 'No more than 30 symbols available';
  }
  if (productEditState.description.trim().length > 30) {
    productEditErrors.description = 'No more than360 symbols available';
  }
  if (productEditState.inStockError.trim().length > 30) {
    productEditErrors.inStockError = 'No more than 60 symbols available';
  }

  // if (!/^[A-ZА-Я]/.test(productEditState.description.trim())) {
  //   productEditState.description === ''
  //     ? (productEditErrors.description = 'Поле пустое. Заполните пожалуйста')
  //     : (productEditErrors.description = 'Имя должно начинаться с заглавной буквы');
  // } else productEditErrors.description = '';

  // if (!/^[A-ZА-Я]/.test(productEditState.inStockError.trim())) {
  //   productEditState.inStockError === ''
  //     ? (productEditErrors.inStockError = 'Поле пустое. Заполните пожалуйста')
  //     : (productEditErrors.inStockError = 'Имя должно начинаться с заглавной буквы');
  // } else productEditErrors.inStockError = '';
};
