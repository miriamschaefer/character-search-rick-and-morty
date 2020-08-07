import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';
import LandingPage from './LandingPage';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';
import Search from './Search';
import Error from './Error';

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
    };
    this.renderCharacterInfo = this.renderCharacterInfo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  //SEARCH AND FILTERS

  handleSearch(data) {
    console.log(data);
    this.setState({
      [data.key]: data.value,
    });
  }

  renderSearch() {
    const filteredCharacters = this.state.characters;

    if (filteredCharacters) {
      return filteredCharacters.filter((character) => {
        return character.name.toLowerCase().includes(this.state.searchText);
      });
    } else {
      return <Error />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Search
          handleSearch={this.handleSearch}
          searchText={this.state.searchText}
        />
        <CharacterList characters={this.renderSearch()} />
        <Switch>
          <Route
            exact
            path="/character/:id"
            render={this.renderCharacterInfo}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
