export const inputsValidate = (formState, formErrors) => {
  if (!/^[A-ZА-Я]/.test(formState.name.trim())) {
    formState.name === ''
      ? (formErrors.name = 'Поле пустое. Заполните пожалуйста')
      : (formErrors.name = 'Имя должно начинаться с заглавной буквы');
  } else formErrors.name = '';

  if (!/^[A-ZА-Я]/.test(formState.lastName.trim())) {
    formState.lastName === ''
      ? (formErrors.lastName = 'Поле пустое. Заполните пожалуйста')
      : (formErrors.lastName = 'Имя должно начинаться с заглавной буквы');
  } else formErrors.lastName = '';

  if (formState.dateOfBirth === '') {
    formErrors.dateOfBirth = 'Выберите дату рождения';
  } else formErrors.dateOfBirth = '';

  if (!/\d\-\d{4}\-\d{2}\-\d{2}$/.test(formState.phone.trim())) {
    formState.phone === ''
      ? (formErrors.phone = 'Поле пустое. Заполните пожалуйста')
      : (formErrors.phone = 'Введите корректный номер телефона в формате: 7-7777-77-77');
  } else formErrors.phone = '';

  if (formState.site.trim().substring(0, 8) !== 'https://') {
    formState.site === ''
      ? (formErrors.site = 'Поле пустое. Заполните пожалуйста')
      : (formErrors.site = 'Имя сайта должно начинаться с: "https://"');
  } else formErrors.site = '';

  if (formState.about.trim() === '') {
    formErrors.about = 'Поле пустое. Заполните пожалуйста';
  } else if (formState.about.trim().length > 600) {
    formErrors.about = 'Превышен лимит символов в поле ввода';
  } else formErrors.about = '';

  if (formState.stackTechnology.trim() === '') {
    formErrors.stackTechnology = 'Поле пустое. Заполните пожалуйста';
  } else if (formState.stackTechnology.trim().length > 600) {
    formErrors.stackTechnology = 'Превышен лимит символов в поле ввода';
  } else formErrors.stackTechnology = '';

  if (formState.lastProject.trim() === '') {
    formErrors.lastProject = 'Поле пустое. Заполните пожалуйста';
  } else if (formState.lastProject.trim().length > 600) {
    formErrors.lastProject = 'Превышен лимит символов в поле ввода';
  } else formErrors.lastProject = '';
};

export const errorsChecking = (formErrors) =>
  Object.values(formErrors).every((error) => error === '');
