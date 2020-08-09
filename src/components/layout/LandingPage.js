import React from 'react';
import Portal from '../../images/portal.png';
import Header from './Header';
import ComeIn from '../../images/come-in.png';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <Link to="/mainpage">
        <Header />
        <main className="landing">
          <div className="landing__imgs">
            <img
              className="landing__imgs__portal"
              src={Portal}
              alt="Rick and Morty"
            />

            <img
              className="landing__imgs__morty"
              src="https://media.giphy.com/media/dxP1UmiavDWDTR6yYd/giphy.gif"
              alt="Rick and Morty"
            />
          </div>
          <div className="landing__imgs__come-in">
            <img src={ComeIn} alt="Rick and Morty" />
          </div>
        </main>
      </Link>
    );
  }
}

export default LandingPage;
