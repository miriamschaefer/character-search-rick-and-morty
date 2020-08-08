import React from 'react';
import CharacterPreview from './CharacterPreview';
import Error from './Error';

class CharacterList extends React.Component {
  render() {
    if (this.props.characters.length === 0) {
      return <Error />;
    } else {
      const characterResult = this.props.characters.map((character) => {
        const { name, id, species, image, status, gender } = character;

        console.log('consoleando props characterlist', this.props.characters);
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
}

export default CharacterList;
