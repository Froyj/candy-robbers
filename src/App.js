import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
// import Menu from './Menu.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Menu /> */}
        <WelcomePage />
      </div>
    );
  }
}

export default App;
