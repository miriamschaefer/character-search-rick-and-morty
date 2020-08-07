import React from 'react';
import { Link } from 'react-router-dom';

class CharacterPreview extends React.Component {
  render() {
    const { name, url, species, gender, status, id } = this.props;
    return (
      <Link to={`/character/${id}`}>
        <li key={id} id={id}>
          <h2>{name}</h2>
          <p>{status}</p>
          <p>{gender}</p>
          <p>{species}</p>
          <img src={url} alt={name} />
        </li>
      </Link>
    );
  }
}

export default CharacterPreview;
