import React from 'react';
import CharacterPreview from './CharacterPreview';
import Error from './layout/Error';

class CharacterList extends React.Component {
  render() {
    if (this.props.characters.length === 0) {
      return (
        <Error
          handleSearch={this.props.handleSearch}
          handleFilterStatus={this.props.handleFilterStatus}
          searchText={this.props.searchText}
          filterStatus={this.props.filterStatus}
          resetAll={this.props.resetAll}
        />
      );
    } else {
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
}

export default CharacterList;
