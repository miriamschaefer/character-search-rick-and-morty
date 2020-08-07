import React from 'react';
import imgError from '../images/rick-morty-error.png';
import Header from './Header';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <Header />
        <h1 className="landing__title">Nothing to see here (yet)...</h1>
        <div className="landing__img">
          <Link to="/characters">
            <img src={imgError} alt="Rick and Morty" />
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
