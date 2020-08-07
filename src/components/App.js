import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';
import LandingPage from './LandingPage';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';
import Search from './Search';

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
  }

  renderCharacterInfo() {
    const character = this.state.characters[1];
    if (character) {
      return (
        <CharacterInfo
          id={character.id}
          name={character.name}
          image={character.image}
          gender={character.gender}
          species={character.species}
          status={character.status}
        />
      );
    } else {
      return 'No existe';
    }
  }

  // renderCharacterInfo(props) {
  // console.log(props.match.params.id);

  // const character = this.state.characters.find(
  //   (character) => character.id === props.match.params.id
  // );

  // console.log(character);

  //   if (character) {
  //     return (
  //       <CharacterInfo
  //         id={character.id}
  //         name={character.name}
  //         url={character.image}
  //         gender={character.gender}
  //         species={character.species}
  //         status={character.status}
  //       />
  //     );
  //   }
  // }

  //SEARCH AND FILTERS

  handleSearch(data) {
    console.log('holi', data);
    this.setState({
      [data.key]: data.value,
    });
  }

  renderSearch() {
    const filteredCharacters = this.state.characters;

    return filteredCharacters.filter((character) => {
      return character.name.toLowerCase().includes(this.state.searchText);
    });
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
        {this.renderCharacterInfo()}
        {/* <Switch>
          <Route
            exact
            path="/character/:id"
            render={this.renderCharacterInfo}
          />
        </Switch> */}
      </div>
    );
  }
}

export default App;
