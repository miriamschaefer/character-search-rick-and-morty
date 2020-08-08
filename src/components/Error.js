import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Error extends Component {
  render() {
    const data = this.props;

    console.log(data);
    return (
      <div className="error">
        <p>{`Whatcha doin'? There's no character who matches your search.`}</p>
      </div>
    );
  }
}

export default Error;
