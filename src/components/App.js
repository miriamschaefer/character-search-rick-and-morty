import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';
import LandingPage from './layout/LandingPage';
import CharacterInfo from './CharacterInfo';
import Main from './layout/Main';
import Error from './layout/Error';

//COMPONENTE FUNCIONAL
// const App = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     getInfo().then((data) => {
//       setCharacters(data);
//     });
//   }, []);

//   console.log(characters);

//   return (
//     <div className="App">
//       <Header />
//       <LandingPage />
//       <CharacterList />
//       <CharacterPreview />
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchText: '',
      filterStatus: 'All',
    };
    this.renderCharacterInfo = this.renderCharacterInfo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilterStatus = this.handleFilterStatus.bind(this);
    this.getMain = this.getMain.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        characters: data,
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
    console.log(this.state.filterStatus);
    ev.preventDefault();
    this.setState({ searchText: '', filterStatus: 'All' });
  }

  //SEARCH AND FILTERS

  handleSearch(data) {
    console.log(data);
    this.setState({
      [data.key]: data.value,
    });
  }

  handleFilterStatus(data) {
    this.setState({ [data.key]: data.value });
  }

  renderSearch() {
    const filteredCharacters = this.state.characters;
    const filterStatus = this.state.filterStatus;

    if (filteredCharacters) {
      return filteredCharacters
        .filter((character) => {
          return character.name.toLowerCase().includes(this.state.searchText);
        })
        .filter((character) => {
          return filterStatus === 'All'
            ? true
            : character.status === filterStatus;
        });
    }
  }
  //RENDER CHARACTERS

  renderCharacterInfo(props) {
    console.log(props.match.params.id);
    const characterId = props.match.params.id;
    const character = this.state.characters.find(
      (character) => character.id === parseInt(characterId)
    );

    console.log(character);
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
      return <Error />;
    }
  }

  //RENDER MAINPAGE
  getMain() {
    return (
      <Main
        handleSearch={this.handleSearch}
        handleFilterStatus={this.handleFilterStatus}
        searchText={this.state.searchText}
        characters={this.renderSearch()}
        resetAll={this.resetAll}
      />
    );
  }

  render() {
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
