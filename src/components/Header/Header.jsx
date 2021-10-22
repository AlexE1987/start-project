import React, { useState } from 'react';
import './Header.css';
import LoginButton from '../../UI/LoginButton';
import Cart from '../Cart/Cart';
import Navbar from './Navbar';
import Modal from '../../UI/Modal/Modal';

const Header = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log('is op', isModalOpened);
  return (
    <div className="header__container">
      <Navbar />
      <Cart />
      <Modal isModalOpened={isModalOpened} setIsModalClosed={() => setIsModalOpened(false)}>
        Enter your name and password
        <form
          action=""
          onSubmit={() => {
            setIsModalOpened(false); //! поменять после реализации валидации
          }}>
          <section>
            <label for="name"></label>
            <input name="name" type="text" placeholder="User name" />
          </section>
          <section>
            <label for="password"></label>
            <input name="password" type="password" placeholder="Password" />
          </section>
          <button>Sign in</button>
        </form>
      </Modal>
      <LoginButton setIsModalOpened={() => setIsModalOpened(true)} />
    </div>
  );
};

export default Header;
