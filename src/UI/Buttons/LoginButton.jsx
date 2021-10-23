import React from 'react';
import './LoginButton.css';
const LoginButton = ({ modalToggle, isLogin, logOut }) => {
  return (
    <>
      {isLogin ? (
        <button className="btn-login" onClick={logOut}>
          LogOut
        </button>
      ) : (
        <button className="btn-login" onClick={modalToggle}>
          Login
        </button>
      )}
    </>
  );
};

export default LoginButton;
