import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import Profile from './components/Profile';
import Dex from './components/Dex';
import Geolocalisation from './components/Geolocalisation';

import './App.css';
import './css/Map.css';
import './css/Profile.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pumpkinsList: {},
      userInfos: {}
    };
  }

  updatePumpkinsList () {
    const pumpkinsList = JSON.parse(localStorage.getItem('pumpkins'));
    this.setState({
      pumpkinsList
    })
  }

  render() {
    return (
      <div className="App" onLoad={() => this.updatePumpkinsList()}>
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
