import React from 'react';
import Header from './Header';
import Search from './Search';
import CharacterList from '../CharacterList';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main wrapper">
          <h1 className="main__title">
            Sometimes science is more art than science
          </h1>
          <Search
            handleSearch={this.props.handleSearch}
            handleFilterStatus={this.props.handleFilterStatus}
            searchText={this.props.searchText}
            filterStatus={this.props.filterStatus}
            resetAll={this.props.resetAll}
          />
          <CharacterList
            characters={this.props.characters}
            handleSearch={this.props.handleSearch}
            handleFilterStatus={this.props.handleFilterStatus}
            searchText={this.props.searchText}
            filterStatus={this.props.filterStatus}
            resetAll={this.props.resetAll}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
