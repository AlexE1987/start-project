import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { authState, customer, admin } from './store/store';
import { validateInputsForm } from './components/utils/validations';

import Header from './components/Header/Header';
import Modal from './UI/Modal/Modal';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import LoginForm from './UI/Forms/LoginForm';

function App() {
  const [isModalClosed, setisModalClosed] = useState(true);
  const [auth, setAuth] = useState(authState);

  const getInputsValues = ({ target: { value, name } }) => {
    setAuth((prevState) => ({ ...prevState, [name]: value }));
  };

  const modalToggle = () => {
    setisModalClosed(!isModalClosed);
  };

  const validate = () => {
    validateInputsForm(auth, authState, admin, customer);
    setAuth(authState);
  };

  return (
    <Router>
      <Header isLogin={auth.isLogin} modalToggle={modalToggle} />
      <Modal isLogin={auth.isLogin} isModalClosed={isModalClosed} modalToggle={modalToggle}>
        Enter your name and password
        <LoginForm
          validate={validate}
          modalToggle={modalToggle}
          getInputsValues={getInputsValues}
        />
      </Modal>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/products/:id" component={() => <Product userRole={auth.role} />} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
