import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ getInputsValues, validate, auth }) => {
  let history = useHistory();

  useEffect(() => {
    if (auth.isLogin) {
      history.push('/');
    }
  }, [auth.isLogin]);

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    if (!auth.isLogin) {
      history.push('/');
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <section>
        <label htmlFor="name"></label>
        <input
          name="name"
          type="text"
          onChange={getInputsValues}
          // value={auth.name}
          placeholder="customer or admin"
        />
      </section>
      <section>
        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          onChange={getInputsValues}
          // value={auth.password}
          placeholder="customer or admin"
        />
      </section>
      <button>Sign in</button>
      <p>{}</p>
    </form>
  );
};

export default LoginForm;
