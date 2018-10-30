import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import { Navbar } from 'reactstrap';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
        <WelcomePage />
      </div>
    );
  }
}

export default App;
