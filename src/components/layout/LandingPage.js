import React from 'react';
import imgError from '../../images/rick-morty-error.png';
import Header from './Header';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="landing">
          <h1 className="landing__title">Nothing to see here (yet)...</h1>
          <div className="landing__img">
            <Link to="/mainpage">
              <img src={imgError} alt="Rick and Morty" />
            </Link>
          </div>
        </main>
      </>
    );
  }
}

export default LandingPage;
