import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class CharacterInfo extends Component {
  render() {
    console.log(this.props);
    const { id, name, status, gender, species, image } = this.props;
    return (
      <li className="character__info" id={id}>
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{status}</p>
          <p>{gender}</p>
          <p>{species}</p>
        </div>
      </li>
    );
  }
}

export default CharacterInfo;
