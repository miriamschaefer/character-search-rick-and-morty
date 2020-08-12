import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';
import getQuote from '../services/QuotesApi';
import LandingPage from './layout/LandingPage';
import CharacterInfo from './CharacterInfo';
import Main from './layout/Main';
import imgError from '../images/rick-morty-error.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      favCharacters: [],
      searchText: '',
      filterStatus: 'All',
      quote: '',
      isFemale: false,
      isOrigin: false,
    };
    this.renderCharacterInfo = this.renderCharacterInfo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilterStatus = this.handleFilterStatus.bind(this);
    this.getMain = this.getMain.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.favHandler = this.favHandler.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        characters: data,
      });
    });

    getQuote().then((data) => {
      this.setState({
        quote: data.data,
      });
    });

    const retrieveInputText = localStorage.getItem('userSearch');
    if (retrieveInputText) {
      this.setState({ searchText: retrieveInputText });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('userSearch', this.state.searchText);
  }

  //RESET INPUTS
  resetAll(ev) {
    ev.preventDefault();
    this.setState({ searchText: '', filterStatus: 'All' });
  }

  //SEARCH AND FILTERS

  handleSearch(data) {
    this.setState({
      [data.key]: data.value,
    });
  }

  handleFilterStatus(data) {
    this.setState({ [data.key]: data.value });
  }

  handleGender() {
    this.setState((prevState) => {
      return { isFemale: !prevState.isFemale };
    });
  }

  handleOrigin() {
    this.setState((prevState) => {
      return { isOrigin: !prevState.isOrigin };
    });
  }

  renderSearch() {
    const filteredCharacters = this.state.characters;
    const filterStatus = this.state.filterStatus;
    const filterGender = this.state.isFemale;

    if (filteredCharacters) {
      return filteredCharacters
        .filter((character) => {
          return character.name.toLowerCase().includes(this.state.searchText);
        })
        .filter((character) => {
          return filterStatus === 'All'
            ? true
            : character.status === filterStatus;
        })
        .filter((character) => {
          return filterGender === true
            ? character.gender.includes('Female')
            : true;
        })
        .filter((character) => {
          return this.state.isOrigin
            ? character.origin.name === character.location.name
            : true;
        });
    }
  }

  favHandler(clickedId) {
    const favCharacters = this.state.favCharacters;

    if (favCharacters.includes(clickedId)) {
      const selectedCharacter = clickedId;

      const unfavedCharacter = favCharacters.filter(
        (character) => character !== selectedCharacter
      );

      this.setState({ favCharacters: unfavedCharacter });
    } else {
      favCharacters.push(clickedId);
      this.setState({ favCharacters: favCharacters });
    }
  }

  //RENDER CHARACTERS

  renderCharacterInfo(props) {
    const characterId = props.match.params.id;
    const character = this.state.characters.find(
      (character) => character.id === parseInt(characterId)
    );

    if (character) {
      return (
        <CharacterInfo
          id={character.id}
          name={character.name}
          image={character.image}
          gender={character.gender}
          species={character.species}
          status={character.status}
          origin={character.origin.name}
          episodes={character.episode.length}
        />
      );
    } else {
      return (
        <div className="error">
          <h3 className="error__title">Hit the sack, and go home, Jack!</h3>
          <Link to="/mainpage">
            <div className="error__img">
              <img src={imgError} alt="Rick and Morty" />
            </div>
          </Link>
        </div>
      );
    }
  }

  //RENDER MAINPAGE
  getMain() {
    console.log(this.state.isOrigin);
    return (
      <Main
        randomQuote={this.state.quote}
        handleSearch={this.handleSearch}
        handleFilterStatus={this.handleFilterStatus}
        filterStatus={this.state.filterStatus}
        searchText={this.state.searchText}
        characters={this.renderSearch()}
        resetAll={this.resetAll}
        handleGender={this.handleGender}
        isFemale={this.state.isFemale}
        favHandler={this.favHandler}
        favCharacters={this.state.favCharacters}
        isOrigin={this.state.isOrigin}
        handleOrigin={this.handleOrigin}
      />
    );
  }

  render() {
    console.log(this.state.favCharacters);
    return (
      <React.Fragment>
        <div className="body">
          <div className="twinkling"></div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/mainpage" render={this.getMain} />
            <Route
              exact
              path="/character/:id"
              render={this.renderCharacterInfo}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
