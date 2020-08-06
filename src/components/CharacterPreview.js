import React from 'react';

class CharacterPreview extends React.Component {
  render() {
    return (
      <li id={this.props.id}>
        <h2>{this.props.name}</h2>
        <img src={this.props.url} alt={this.props.name} />
      </li>
    );
  }
}

export default CharacterPreview;
