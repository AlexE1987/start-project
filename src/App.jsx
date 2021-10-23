import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { authInitialState } from './store/store';
import { validateInputsForm } from './components/utils/validations';

import Header from './components/Header/Header';
import Modal from './UI/Modal/Modal';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import LoginForm from './UI/Forms/LoginForm';

function App() {
  const [isModalClosed, setisModalClosed] = useState(true);
  const [auth, setAuth] = useState(authInitialState);

  const getInputsValues = ({ target: { value, name } }) => {
    setAuth((prevState) => ({ ...prevState, [name]: value }));
  };

  const modalToggle = () => {
    setisModalClosed(!isModalClosed);
  };

  const validate = () => {
    validateInputsForm(auth, authInitialState);

    setAuth(authInitialState);
  };

  const logOut = (event) => {
    event.preventDefault();
    setAuth((prevState) => ({
      ...prevState,
      name: '',
      password: '',
      role: '',
      error: '',
      isLogin: false,
    }));
  };
  return (
    <Router>
      <Header logOut={logOut} role={auth.role} isLogin={auth.isLogin} modalToggle={modalToggle} />
      <Modal isLogin={auth.isLogin} isModalClosed={isModalClosed} modalToggle={modalToggle}>
        Enter your name and password
        <LoginForm
          auth={auth}
          validate={validate}
          modalToggle={modalToggle}
          getInputsValues={getInputsValues}
        />
      </Modal>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/products/:id" component={() => <Product userRole={auth.role} />} />
        <Route path="/" component={() => <Home userRole={auth.role} />} />
      </Switch>
    </Router>
  );
}

export default App;
