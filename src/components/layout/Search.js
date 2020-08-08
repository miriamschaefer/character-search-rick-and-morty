import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.renderSearchChild = this.renderSearchChild.bind(this);
    this.handleFilterStatusChild = this.handleFilterStatusChild.bind(this);
  }

  renderSearchChild(ev) {
    ev.preventDefault();
    this.props.handleSearch({
      key: 'searchText',
      value: ev.target.value,
    });
  }

  handleFilterStatusChild(ev) {
    this.props.handleFilterStatus({
      key: 'filterStatus',
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
          <label htmlFor="filterStatus" className="form__label">
            Status:
          </label>
          <select
            id="filterStatus"
            className="form__input-text"
            value={this.props.filterPrice}
            onChange={this.handleFilterStatusChild}
          >
            <option value="All">👯‍♀️ All</option>
            <option value="Alive">🌝 Alive</option>
            <option value="Dead">💀 Dead</option>
            <option value="unknown">❓ Unknown</option>
          </select>
        </div>
        <button value="Reset form" onClick={this.props.resetAll}>
          <i className="fas fa-times-circle"></i>
        </button>
      </form>
    );
  }
}

export default Search;
