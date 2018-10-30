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

  componentDidMount() {
    if (!localStorage.getItem('pumpkins')) {
      localStorage.setItem('pumpkins', JSON.stringify([]));
    }
    const pumpkins = require('./pumpkins.json'); 
    localStorage.setItem('pumpkins', JSON.stringify(pumpkins));
  }

  updatePumpkinsList () {
    const pumpkinsList = JSON.parse(localStorage.getItem('pumpkins'));
    this.setState({
      pumpkinsList
    })
  }

  addPumpkin () {
    const pumpkin = {
      "id": 8,
      "isOpen": false,
      "position": {lat: 43.60482, lng: 1.44728},
       "reward": ["Caramel pourri", "80 points"]
    }
    if (!localStorage.getItem('pumpkins')) {
      localStorage.setItem('pumpkins', JSON.stringify([]));
    }
    const previousPumpkinsList = JSON.parse(localStorage.getItem('pumpkins'));
    localStorage.setItem('pumpkins', JSON.stringify([...previousPumpkinsList, pumpkin]));
  }

  render() {
    const { pumpkinsList } = this.state;
    return (
      <div 
        className="App"
        onLoad={() => {
          this.updatePumpkinsList();
        }
      }>
        <div>
          <Menu />
        </div>
        <div>
          <Route path="/" exact component={WelcomePage}/>
          <Route path="/map" exact render={(props) => <Geolocalisation {...props} pumpkinsList={pumpkinsList}/>}/>
          <Route path="/myprofile" exact component={Profile}/>
          <Route path="/mycandydex" exact component={Dex}/>
        </div>  
      </div>
    );
  }
}

export default App;
