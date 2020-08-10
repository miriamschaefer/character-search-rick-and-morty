import React from 'react';
import Header from './Header';
import Search from './Search';
import CharacterList from '../CharacterList';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header />
        <main className="main wrapper">
          <h1 className="main__title ">"{this.props.randomQuote}"</h1>
          <div className="main__img">
            <img
              src="https://media.giphy.com/media/gJ2TzwqdRoKoZ0KWhW/giphy.gif"
              alt="UFO"
            />
          </div>
          <Search
            handleSearch={this.props.handleSearch}
            handleFilterStatus={this.props.handleFilterStatus}
            searchText={this.props.searchText}
            filterStatus={this.props.filterStatus}
            resetAll={this.props.resetAll}
            isSorted={this.props.isSorted}
            handleSort={this.props.handleSort}
          />
          <CharacterList
            characters={this.props.characters}
            handleSearch={this.props.handleSearch}
            handleFilterStatus={this.props.handleFilterStatus}
            searchText={this.props.searchText}
            filterStatus={this.props.filterStatus}
            resetAll={this.props.resetAll}
            sort={this.props.isSorted}
            handleSort={this.props.handleSort}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
