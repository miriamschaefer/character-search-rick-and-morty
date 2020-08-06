import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getInfo from '../services/Api';
import LandingPage from './LandingPage';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';

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
    };
    this.renderCharacterInfo = this.renderCharacterInfo.bind(this);
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }

  renderCharacterInfo(props) {
    console.log(props.match.params.id);

    const character = this.state.characters.find(
      (character) => character.id === props.match.params.id
    );

    console.log(character);

    if (character) {
      return (
        <CharacterInfo
          id={character.id}
          name={character.name}
          url={character.image}
          gender={character.gender}
          species={character.species}
          status={character.status}
        />
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <CharacterList characters={this.state.characters} />
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
