import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/mainpage">
          <div className="footer__logo"></div>
        </Link>
      </footer>
    );
  }
}

export default Footer;
