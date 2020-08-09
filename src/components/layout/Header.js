import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header wrapper">
        <Link to="/">
          <div className="header__logo">
            <img src={Logo} alt="Rick and Morty logo" />
          </div>
          <p className="header__name">Character Search</p>
        </Link>
      </header>
    );
  }
}

export default Header;
