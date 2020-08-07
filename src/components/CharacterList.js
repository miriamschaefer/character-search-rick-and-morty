import React from 'react';
import CharacterPreview from './CharacterPreview';

class CharacterList extends React.Component {
  render() {
    const characterResult = this.props.characters.map((character) => {
      const { name, id, species, image, status, gender } = character;
      return (
        <CharacterPreview
          key={id}
          id={id}
          name={name}
          url={image}
          species={species}
          status={status}
          gender={gender}
        />
      );
    });

    return <ul className="character__list">{characterResult}</ul>;
  }
}

export default CharacterList;
