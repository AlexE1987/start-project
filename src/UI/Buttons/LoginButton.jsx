import React from 'react';
import './LoginButton.css';
const LoginButton = ({ setIsModalOpened }) => {
  return (
    <button className="btn-login" onClick={setIsModalOpened}>
      Login
    </button>
  );
};

export default LoginButton;
