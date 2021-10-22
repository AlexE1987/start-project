import './Header.css';

import LoginButton from '../../UI/Buttons/LoginButton';
import Cart from '../Cart/Cart';
import Navbar from './Navbar';

const Header = ({ modalToggle, isLogin }) => {
  return (
    <div className="header__container">
      <Navbar />
      <Cart />
      <LoginButton isLogin={isLogin} modalToggle={modalToggle} />
    </div>
  );
};

export default Header;
