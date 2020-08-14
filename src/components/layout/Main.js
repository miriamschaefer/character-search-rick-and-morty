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
            isFemale={this.props.isFemale}
            handleGender={this.props.handleGender}
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
