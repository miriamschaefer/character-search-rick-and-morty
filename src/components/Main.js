import React from 'react';
import Header from './Header';
import Search from './Search';
import CharacterList from './CharacterList';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <h1 className="main__title">Welcome</h1>
        <Search
          handleSearch={this.handleSearch}
          searchText={this.state.searchText}
        />
        <CharacterList characters={this.renderSearch()} />
      </div>
    );
  }
}

export default LandingPage;
