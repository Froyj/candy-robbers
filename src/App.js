import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import Profile from './components/Profile';
import Dex from './components/Dex';
import Geolocalisation from './components/Geolocalisation';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Menu />
        </div>
        <div>
          <Route path="/" exact component={WelcomePage}/>
          <Route path="/map" exact component={Geolocalisation}/>
          <Route path="/myprofile" exact component={Profile}/>
          <Route path="/mycandydex" exact component={Dex}/>
        </div>  
      </div>
    );
  }
}

export default App;
