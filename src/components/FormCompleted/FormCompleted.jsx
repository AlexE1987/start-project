import './FormCompleted.css';

import React from 'react';
const FormCompleted = (props) => {
  return (
    <div className={props.state.formIsValid ? 'form-completed__wrapper' : 'hide'}>
      <div className="info__wrapper">
        <h3 className="title">Дата рождения</h3>
        <p className="desc">{props.state.dateOfBirth}</p>
        <h3 className="title">Номер телефона</h3>
        <p className="desc">{props.state.phone}</p>
        <h3 className="title">Сайт</h3>
        <p className="desc">{props.state.site}</p>
      </div>
      <div className="description__wrapper">
        <h3 className="title"> О себе</h3>
        <p className="desc">{props.state.about}</p>

        <h3 className="title"> Стэк технологий</h3>
        <p className="desc">{props.state.stackTechnology}</p>

        <h3 className="title"> Описание последнего проекта </h3>
        <p className="desc">{props.state.lastProject}</p>
      </div>
    </div>
  );
};

export default FormCompleted;
