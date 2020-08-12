import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.renderSearchChild = this.renderSearchChild.bind(this);
    this.handleFilterStatusChild = this.handleFilterStatusChild.bind(this);
    this.handleGenderChild = this.handleGenderChild.bind(this);
    this.handleOriginChild = this.handleOriginChild.bind(this);
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

  handleGenderChild(ev) {
    this.props.handleGender({
      key: 'handleGender',
      value: ev.target.checked,
    });
  }

  handleOriginChild(ev) {
    this.props.handleOrigin({
      key: 'handleOrigin',
      value: ev.target.checked,
    });
  }

  handleSubmit(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  }

  render() {
    console.log(this.props.isFemale);
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
        <label htmlFor="genderFemale">Female:</label>
        <input
          type="checkbox"
          id="filterGender"
          name="female"
          onChange={this.handleGenderChild}
          checked={this.props.isFemale}
        />
        <label htmlFor="origin">Same origin:</label>
        <input
          type="checkbox"
          id="filterOrigin"
          name="female"
          onChange={this.handleOriginChild}
          checked={this.props.isOrigin}
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
