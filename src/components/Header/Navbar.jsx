import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar__wrapper">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
