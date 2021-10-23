import './Header.css';

import LoginButton from '../../UI/Buttons/LoginButton';
import Cart from '../Cart/Cart';
import Navbar from './Navbar';

const Header = ({ modalToggle, isLogin, role, logOut }) => {
  return (
    <div className="header__container">
      <Navbar />
      {role && <Cart />}
      <LoginButton logOut={logOut} role={role} isLogin={isLogin} modalToggle={modalToggle} />
    </div>
  );
};

export default Header;
