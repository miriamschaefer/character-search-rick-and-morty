import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.renderSearchChild = this.renderSearchChild.bind(this);
    this.handleFilterSpeciesChild = this.handleFilterSpeciesChild.bind(this);
  }

  renderSearchChild(ev) {
    ev.preventDefault();
    this.props.handleSearch({
      key: 'searchText',
      value: ev.target.value,
    });
  }

  handleFilterSpeciesChild(ev) {
    this.props.handleFilterSpecies({
      key: 'filterSpecies',
      value: ev.target.value,
    });
  }

  handleSubmit(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="search">Search for character: </label>
        <input
          type="text"
          id="search"
          placeholder="Morty"
          onChange={this.renderSearchChild}
          value={this.props.searchText}
          onKeyPress={this.handleSubmit}
        />
        <div>
          <label htmlFor="filterSpecies" className="form__label">
            Species:
          </label>
          <select
            id="filterSpecies"
            className="form__input-text"
            value={this.props.filterPrice}
            onChange={this.handleFilterSpeciesChild}
          >
            <option value="All">👯‍♀️ All</option>
            <option value="Human">🕺🏻 Human</option>
            <option value="Alien">👽 Alien</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Search;
