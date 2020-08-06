import React from 'react';
import imgError from '../images/rick-morty-error.png';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__title">Nothing to see here (yet)...</h1>
        <div className="landing__img">
          <img src={imgError} alt="Rick and Morty" />
        </div>
      </div>
    );
  }
}

export default LandingPage;
