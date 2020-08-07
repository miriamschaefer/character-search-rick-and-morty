import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterInfo extends Component {
  handleModalContent(ev) {
    ev.preventDefault();
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
              <p>{name}</p>
              <p>{status}</p>
              <p>{gender}</p>
              <p>{species}</p>
              <p>{origin}</p>
              <p>{episodes}</p>
              <Link to="/">
                <p>Cerrar</p>
              </Link>
            </div>
          </li>
        </div>
      </Link>
    );
  }
}

export default CharacterInfo;
