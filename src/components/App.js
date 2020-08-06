import React from 'react';
import '../stylesheets/App.scss';
import LandingPage from './LandingPage';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
