import React from 'react';
import './Form.css';

const Form = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.formValidate();
  };

  return (
    <form
      className={props.formState.formIsValid ? 'hide' : 'form__wrapper'}
      onSubmit={handleFormSubmit}>
      <label className="label" htmlFor="">
        Имя
        <input
          className="input"
          name="name"
          type="text"
          value={props.formState.name}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.formState.nameError}</p>}
      </label>

      <label className="label" htmlFor="">
        Фамилия
        <input
          className="input"
          name="lastName"
          type="text"
          value={props.formState.lastName}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.formState.lastNameError}</p>}
      </label>

      <label className="label" htmlFor="">
        Дата рождения
        <input
          className="input"
          name="dateOfBirth"
          type="date"
          value={props.formState.dateOfBirth}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.formState.dateOfBirthError}</p>}
      </label>

      <label className="label" htmlFor="">
        Номер телефона
        <input
          className="input"
          type="tel"
          name="phone"
          placeholder="7-7777-77-77"
          value={props.formState.phone}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.formState.phoneError}</p>}
      </label>

      <label className="label" htmlFor="">
        Сайт
        <input
          className="input"
          name="site"
          type="text"
          placeholder="https:// "
          value={props.formState.site}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.formState.siteError}</p>}
      </label>

      <label className="label" htmlFor="">
        О себе
        <textarea
          className="input textarea"
          name="about"
          cols="30"
          rows="2"
          value={props.formState.about}
          onChange={props.getValuesFromForm}></textarea>
        <div className="symbols-counter">
          Доступно символов: {600 - props.formState.about.length}
        </div>
        {<p className="error">{props.formState.aboutError}</p>}
      </label>

      <label className="label" htmlFor="">
        Стэк технологий
        <textarea
          className="input textarea"
          name="stackTechnology"
          cols="30"
          rows="2"
          value={props.formState.stackTechnology}
          onChange={props.getValuesFromForm}></textarea>
        <div className="symbols-counter">
          Доступно символов: {600 - props.formState.stackTechnology.length}
        </div>
        {<p className="error">{props.formState.stackTechnologyError}</p>}
      </label>

      <label className="label" htmlFor="">
        Описание последнего проекта
        <textarea
          className="input textarea"
          name="lastProject"
          id=""
          cols="30"
          rows="2"
          value={props.formState.lastProject}
          onChange={props.getValuesFromForm}></textarea>
        <div className="symbols-counter">
          Доступно символов: {600 - props.formState.lastProject.length}
        </div>
        {<p className="error">{props.formState.lastProjectError}</p>}
      </label>

      <div className="btn__container">
        <button className="btn">Сохранить</button>
        <button className="btn" onClick={props.clearformState}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default Form;
