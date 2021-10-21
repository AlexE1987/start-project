import './Main.css';

import FormCompleted from '../FormCompleted/FormCompleted';
import Form from '../UI/Form/Form';

import { useState } from 'react';

import { formInitialState, formErrors } from '../../store/store';
import { inputsValidate, errorsChecking } from '../../utils/valdation';

import React from 'react';

const Main = (props) => {
  const [formState, setFormState] = useState(formInitialState);
  const getValuesFromForm = ({ target: { value, name } }) =>
    setFormState((prevState) => ({ ...prevState, [name]: value }));

  const formValidate = () => {
    inputsValidate(formState, formErrors);

    if (!errorsChecking(formErrors)) {
      setFormState((prevState) => ({
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
      props.renameHeaderTitle(formState.name, formState.lastName);
      setFormState((prevState) => ({ ...prevState, formIsValid: true }));
    }
  };

  const clearformState = (event) => {
    event.preventDefault();
    setFormState(formInitialState);
  };

  return (
    <>
      <Form
        getValuesFromForm={getValuesFromForm}
        formValidate={formValidate}
        clearformState={clearformState}
        formState={formState}
      />
      <FormCompleted formState={formState} />
    </>
  );
};

export default Main;
