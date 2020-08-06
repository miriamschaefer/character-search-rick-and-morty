import React from 'react';
import CharacterPreview from './CharacterPreview';

class CharacterList extends React.Component {
  render() {
    const characterResult = this.props.characters.map((character) => {
      return (
        <CharacterPreview
          key={character.id}
          id={character.id}
          name={character.name}
          gender={character.gender}
          url={character.image}
          status={character.status}
          species={character.species}
        />
      );
    });

    return <ul className="App__container">{characterResult}</ul>;
  }
}

export default CharacterList;
