import React from 'react';
import Logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img src={Logo} />
        </div>
      </div>
    );
  }
}

export default Header;
