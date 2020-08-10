import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__text">
          <p>
            Made with <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
            <a href="http://www.miriamschaefer.es" alt="Visit website">
              Miriam Schaefer{' '}
            </a>
            for{' '}
            <a href="http://www.adalab.es" alt="Visit Adalab's website">
              Adalab
            </a>
            .
          </p>
        </div>

        <ul className="footer__socialmedia">
          <li>
            <a alt="Github" href="http://www.github.com/miriamschaefer">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>

          <li>
            <a alt="Instagram" href="http://www.instagram.com/miriamschaefer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a alt="Twitter" href="http://www.twitter.com/miriam_schaefer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
