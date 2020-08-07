import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgError from '../images/rick-morty-error.png';
class CharacterInfo extends Component {
  handleModalContent(ev) {
    ev.preventDefault();
  }

  renderStatusEmoji(status) {
    if (status === 'Alive') {
      return '🌝';
    } else if (status === 'Dead') {
      return '💀';
    } else {
      return '❓';
    }
  }
  render() {
    console.log(this.props);
    const {
      id,
      name,
      status,
      gender,
      species,
      image,
      origin,
      episodes,
    } = this.props;
    return (
      <Link to="/">
        <div className="character">
          <li
            className="character__info"
            id={id}
            onClick={this.handleModalContent}
          >
            <img src={image} alt={name} />
            <div>
              <p>Full Name: {name}</p>
              <p>Status: {this.renderStatusEmoji(status)}</p>
              <p>Gender: {gender}</p>
              <p>Species: {species === 'Alien' ? '👽' : '🕺🏻'}</p>
              <p>Origin: {origin}</p>
              <p>It appears in {episodes} episodes.</p>
              <Link to="/">
                <p>Cerrar</p>
              </Link>
            </div>
            <Link to={`/character/${id - 1}`}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
            <Link to="/characters">
              <li>
                <img src={imgError} alt="Rick and Morty" />
              </li>
            </Link>
            <Link to={`/character/${id + 1}`}>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </li>
        </div>
      </Link>
    );
  }
}

export default CharacterInfo;
