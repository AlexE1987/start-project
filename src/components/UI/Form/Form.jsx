import React from 'react';
import './Form.css';

const Form = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.formValidate();
  };
  return (
    <form
      className={props.state.formIsValid ? 'hide' : 'form__wrapper'}
      onSubmit={handleFormSubmit}>
      <label className="label" htmlFor="">
        Имя
        <input
          className="input"
          name="name"
          type="text"
          value={props.state.name}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.state.nameError}</p>}
      </label>

      <label className="label" htmlFor="">
        Фамилия
        <input
          className="input"
          name="lastName"
          type="text"
          value={props.state.lastName}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.state.lastNameError}</p>}
      </label>

      <label className="label" htmlFor="">
        Дата рождения
        <input
          className="input"
          name="dateOfBirth"
          type="date"
          value={props.state.dateOfBirth}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.state.dateOfBirthError}</p>}
      </label>

      <label className="label" htmlFor="">
        Номер телефона
        <input
          className="input"
          type="tel"
          name="phone"
          placeholder="7-7777-77-77"
          value={props.state.phone}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.state.phoneError}</p>}
      </label>

      <label className="label" htmlFor="">
        Сайт
        <input
          className="input"
          name="site"
          type="text"
          placeholder="https:// "
          value={props.state.site}
          onChange={props.getValuesFromForm}
        />
        {<p className="error">{props.state.siteError}</p>}
      </label>

      <label className="label" htmlFor="">
        О себе
        <textarea
          className="input textarea"
          name="about"
          cols="30"
          rows="2"
          value={props.state.about}
          onChange={props.getValuesFromForm}></textarea>
        <div className="symbols-counter">Доступно символов: {600 - props.state.about.length}</div>
        {<p className="error">{props.state.aboutError}</p>}
      </label>

      <label className="label" htmlFor="">
        Стэк технологий
        <textarea
          className="input textarea"
          name="stackTechnology"
          cols="30"
          rows="2"
          value={props.state.stackTechnology}
          onChange={props.getValuesFromForm}></textarea>
        <div className="symbols-counter">
          Доступно символов: {600 - props.state.stackTechnology.length}
        </div>
        {<p className="error">{props.state.stackTechnologyError}</p>}
      </label>

      <label className="label" htmlFor="">
        Описание последнего проекта
        <textarea
          className="input textarea"
          name="lastProject"
          id=""
          cols="30"
          rows="2"
          value={props.state.lastProject}
          onChange={props.getValuesFromForm}></textarea>
        <div className="symbols-counter">
          Доступно символов: {600 - props.state.lastProject.length}
        </div>
        {<p className="error">{props.state.lastProjectError}</p>}
      </label>

      <div className="btn__container">
        <button className="btn">Сохранить</button>
        <button className="btn" onClick={props.clearState}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default Form;
