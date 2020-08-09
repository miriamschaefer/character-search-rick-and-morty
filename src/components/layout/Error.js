import React, { Component } from 'react';
import imgError from '../../images/rick-morty-error.png';

class Error extends Component {
  render() {
    const data = this.props;

    console.log(data);
    return (
      <div className="error">
        <p>{`Lick, lick, lick my balls! Whatcha doin'? There's no character who matches your search: ${this.props.searchText}`}</p>
        <h2 className="error__title" onClick={this.props.resetAll}>
          Hit the sack, Jack!
        </h2>
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
