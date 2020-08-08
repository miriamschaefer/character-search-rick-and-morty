import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to="/mainpage">
            <img src={Logo} alt="Rick and Morty logo" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
