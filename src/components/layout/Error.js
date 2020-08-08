import React, { Component } from 'react';
import imgError from '../../images/rick-morty-error.png';
import { Link } from 'react-router-dom';

class Error extends Component {
  render() {
    const data = this.props;

    console.log(data);
    return (
      <div className="error">
        <p>{`Whatcha doin'? There's no character who matches your search.`}</p>
        <Link to="/">
          <img src={imgError} alt="Rick and Morty" />
        </Link>
      </div>
    );
  }
}

export default Error;
