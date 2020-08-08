import React from 'react';
import Header from './Header';
import Search from './Search';
import CharacterList from './CharacterList';

class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header />
        <main className="main">
          <h1>Sometimes science is more art than science</h1>
          <Search
            handleSearch={this.props.handleSearch}
            handleFilterStatus={this.props.handleFilterStatus}
            searchText={this.props.searchText}
          />
          <CharacterList characters={this.props.characters} />
        </main>
      </>
    );
  }
}

export default Main;
