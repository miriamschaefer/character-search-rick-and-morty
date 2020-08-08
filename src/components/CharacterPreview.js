import React from 'react';
import { Link } from 'react-router-dom';

class CharacterPreview extends React.Component {
  render() {
    const { name, url, species, gender, id } = this.props;

    return (
      <Link to={`/character/${id}`}>
        <li key={id} id={id} className="preview__card">
          <h2 className="preview__card__title">{name}</h2>
          <div className="preview__card__img">
            <img src={url} alt={name} />
          </div>
          <div className="preview__card__info">
            <p>{gender}</p>
            <p>{species === 'Alien' ? '👽' : '🕺🏻'}</p>
          </div>
        </li>
      </Link>
    );
  }
}

export default CharacterPreview;
