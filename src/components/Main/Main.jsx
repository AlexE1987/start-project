import './Main.css';

import FormCompleted from '../FormCompleted/FormCompleted';
import Form from '../UI/Form/Form';

import { useState } from 'react';

import { formInitialState, formErrors } from '../../store/store';
import { inputsValidate, errorsChecking } from '../../utils/valdation';

import React from 'react';

const Main = (props) => {
  const [state, setState] = useState(formInitialState);
  const getValuesFromForm = ({ target: { value, name } }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));

  const formValidate = () => {
    inputsValidate(state, formErrors);

    if (!errorsChecking(formErrors)) {
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
        formValidate={formValidate}
        clearState={clearState}
        state={state}
      />
      <FormCompleted state={state} />
    </>
  );
};

export default Main;
