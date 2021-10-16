import FormCompleted from '../FormCompleted/FormCompleted';
import Form from '../UI/Form/Form';
import './Main.css';
import { formInitialState, formErrors } from '../../store/store';
import { useState } from 'react';

import React from 'react';

const Main = (props) => {
  const [state, setState] = useState(formInitialState);
  const getValuesFromForm = ({ target: { value, name } }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));

  const inputsValidate = () => {
    if (!/^[A-ZА-Я]/.test(state.name.trim())) {
      state.name === ''
        ? (formErrors.name = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.name = 'Имя должно начинаться с заглавной буквы');
    } else formErrors.name = '';

    if (!/^[A-ZА-Я]/.test(state.lastName.trim())) {
      state.lastName === ''
        ? (formErrors.lastName = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.lastName = 'Имя должно начинаться с заглавной буквы');
    } else formErrors.lastName = '';

    if (state.dateOfBirth === '') {
      formErrors.dateOfBirth = 'Выберите дату рождения';
    } else formErrors.dateOfBirth = '';

    if (!/\d\-\d{4}\-\d{2}\-\d{2}$/.test(state.phone.trim())) {
      state.phone === ''
        ? (formErrors.phone = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.phone = 'Введите корректный номер телефона в формате: 7-7777-77-77');
    } else formErrors.phone = '';

    if (state.site.trim().substring(0, 8) !== 'https://') {
      state.site === ''
        ? (formErrors.site = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.site = 'Имя сайта должно начинаться с: "https://"');
    } else formErrors.site = '';

    if (state.about.trim() === '') {
      formErrors.about = 'Поле пустое. Заполните пожалуйста';
    } else if (state.about.trim().length > 600) {
      formErrors.about = 'Превышен лимит символов в поле ввода';
    } else formErrors.about = '';

    if (state.stackTechnology.trim() === '') {
      formErrors.stackTechnology = 'Поле пустое. Заполните пожалуйста';
    } else if (state.stackTechnology.trim().length > 600) {
      formErrors.stackTechnology = 'Превышен лимит символов в поле ввода';
    } else formErrors.stackTechnology = '';

    if (state.lastProject.trim() === '') {
      formErrors.lastProject = 'Поле пустое. Заполните пожалуйста';
    } else if (state.lastProject.trim().length > 600) {
      formErrors.lastProject = 'Превышен лимит символов в поле ввода';
    } else formErrors.lastProject = '';

    if (
      formErrors.name ||
      formErrors.lastName ||
      formErrors.dateOfBirth ||
      formErrors.phone ||
      formErrors.site ||
      formErrors.about ||
      formErrors.stackTechnology ||
      formErrors.lastProject
    ) {
      setState((prevState) => ({
        ...prevState,
        nameError: formErrors.name,
        lastNameError: formErrors.lastName,
        dateOfBirthError: formErrors.dateOfBirth,
        phoneError: formErrors.phone,
        siteError: formErrors.site,
        aboutError: formErrors.about,
        stackTechnologyError: formErrors.stackTechnology,
        lastProjectError: formErrors.lastProject,
      }));
    } else {
      props.renameHeaderTitle(state.name, state.lastName);
      setState((prevState) => ({ ...prevState, formIsValid: true }));
    }
  };
  const clearState = (event) => {
    event.preventDefault();
    setState(formInitialState);
  };

  return (
    <>
      <Form
        getValuesFromForm={getValuesFromForm}
        inputsValidate={inputsValidate}
        clearState={clearState}
        state={state}
      />
      <FormCompleted state={state} />
    </>
  );
};

export default Main;
