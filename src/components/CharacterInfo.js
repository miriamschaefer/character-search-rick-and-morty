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
      <div className="character" id={id}>
        <div className="character__card" onClick={this.handleModalContent}>
          <div className="character__card__img">
            <img src={image} alt={name} />
          </div>
          <div className="character__card__close-icon">
            <Link to="/characters">
              <i className="fas fa-times-circle"></i>
            </Link>
          </div>
          <div className="character__card__info">
            <p>Full Name: {name}</p>
            <p>Status: {this.renderStatusEmoji(status)}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species === 'Alien' ? '👽' : '🕺🏻'} </p>
            <p>Origin: {origin}</p>
            <p>Number of episodes: {episodes}</p>
          </div>

          <ul className="navigation">
            <li className="navigation__left">
              <Link to={`/character/${id - 1}`}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="navigation__img">
              <Link to="/characters">
                <img src={imgError} alt="Back home" />
              </Link>
            </li>
            <li className="navigation__right">
              <Link to={`/character/${id + 1}`}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CharacterInfo;
