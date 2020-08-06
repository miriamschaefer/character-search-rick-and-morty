import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import LandingPage from './LandingPage';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterPreview from './CharacterPreview';
import getInfo from '../services/Api';

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
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <CharacterList characters={this.state.characters} />
        <CharacterPreview />
      </div>
    );
  }
}

export default App;
