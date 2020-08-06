import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class CharacterInfo extends Component {
  // console.log(props);
  render() {
    const {
      id,
      name,
      status,
      gender,
      species,

      image,
    } = this.props.character;
    return (
      <li id={id}>
        <p>{name}</p>
        <p>{status}</p>
        <p>{gender}</p>
        <p>{species}</p>
        <img src={image} alt={name} />
      </li>
    );
  }
}

export default CharacterInfo;
