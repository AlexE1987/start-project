import React from 'react';
import './LoginButton.css';
const LoginButton = ({ modalToggle, isLogin }) => {
  return (
    <>
      {isLogin ? (
        <button className="btn-login">LogOut</button>
      ) : (
        <button className="btn-login" onClick={modalToggle}>
          Login
        </button>
      )}
    </>
  );
};

export default LoginButton;
