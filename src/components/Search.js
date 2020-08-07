import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.renderSearchChild = this.renderSearchChild.bind(this);
  }

  renderSearchChild(ev) {
    this.props.handleSearch({
      key: 'searchText',
      value: ev.target.value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="search">Search for character: </label>
        <input
          type="text"
          id="search"
          placeholder="Search your fav character"
          onChange={this.renderSearchChild}
          value={this.props.searchText}
        />
      </form>
    );
  }
}

export default Search;
