import React, { useState, useEffect } from 'react';

const LoginForm = ({ getInputsValues, validate }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <section>
        <label htmlFor="name"></label>
        <input name="name" type="text" onChange={getInputsValues} placeholder="customer or admin" />
      </section>
      <section>
        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          onChange={getInputsValues}
          placeholder="customer or admin"
        />
      </section>
      <button>Sign in</button>
      <p>{}</p>
    </form>
  );
};

export default LoginForm;
