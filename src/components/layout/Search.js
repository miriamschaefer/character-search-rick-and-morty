import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.renderSearchChild = this.renderSearchChild.bind(this);
    this.handleFilterStatusChild = this.handleFilterStatusChild.bind(this);
    this.handleGenderChild = this.handleGenderChild.bind(this);
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

  handleGenderChild(ev) {
    this.props.handleGender({
      key: 'gender',
      value: ev.target.checked,
    });
  }

  render() {
    return (
      <form className="form">
        <div className="form__search">
          <label htmlFor="search" className="form__search__label">
            Search for characters:
          </label>
          <input
            className="form__search__input"
            type="text"
            id="search"
            placeholder="Morty"
            onChange={this.renderSearchChild}
            value={this.props.searchText}
            onKeyPress={this.handleSubmit}
          />
        </div>
        <div className="form__status">
          <label htmlFor="filterStatus" className="form__status__label">
            Status:
          </label>
          <select
            id="filterStatus"
            className="form__status__input"
            value={this.props.filterStatus}
            onChange={this.handleFilterStatusChild}
          >
            <option value="All">All</option>
            <option value="Alive"> Alive</option>
            <option value="Dead"> Dead</option>
            <option value="unknown"> Unknown</option>
          </select>
        </div>

        <label htmlFor="gender">Female:</label>
        <input
          type="checkbox"
          value={this.props.isFemale}
          onChange={this.handleGenderChild}
        />

        <button
          className="form__search__reset"
          value="Reset form"
          onClick={this.props.resetAll}
        >
          <i className="fas fa-times-circle"></i>
        </button>
      </form>
    );
  }
}

export default Search;
