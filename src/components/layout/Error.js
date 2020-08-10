import React, { Component } from 'react';
import imgError from '../../images/rick-morty-error.png';

class Error extends Component {
  render() {
    return (
      <div className="error wrapper">
        <h2 className="error__title typewriter">Lick, lick, lick my balls!!</h2>
        <p className="error__text">
          Whatcha doin'? There's no <span>{` ${this.props.filterStatus}`}</span>{' '}
          character matching your search:
          <span>{` ${this.props.searchText}`}</span>.
        </p>
        <h3 className="error__subtitle" onClick={this.props.resetAll}>
          Hit the sack, Jack!
        </h3>
        <div className="error__img">
          <img
            onClick={this.props.resetAll}
            src={imgError}
            alt="Rick and Morty"
          />
        </div>
      </div>
    );
  }
}

export default Error;
