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
      pumpkinsList: [],
      userInfos: {
        pseudo: '',
        points: 0,
        bonbondex: []
      }
    };
    this.updatePumpkinsList = this.updatePumpkinsList.bind(this);
  }

  componentDidMount() {
    let pumpkins = localStorage.getItem('pumpkins');
    if (!pumpkins) {
      pumpkins = require('./pumpkins.json');
      localStorage.setItem('pumpkins', JSON.stringify(pumpkins));
    } else {
      pumpkins = JSON.parse(pumpkins);
    }
    this.setState({
      pumpkinsList : pumpkins
    })
  }

  updatePumpkinsList(pumpkinsList) {
    const newPumpkinsList = pumpkinsList.filter((pumpkin) => !pumpkin.isOpen);
    this.setState({
      pumpkinsList: newPumpkinsList
    })
    localStorage.setItem('pumpkins', JSON.stringify(newPumpkinsList)); 
  }

  addPumpkin() {
    const pumpkin = {
      "id": 8,
      "isOpen": false,
      "position": { lat: 43.60482, lng: 1.44728 },
      "reward": ["Caramel pourri", "80 points"]
    }
    if (!localStorage.getItem('pumpkins')) {
      localStorage.setItem('pumpkins', JSON.stringify([]));
    }
    const previousPumpkinsList = JSON.parse(localStorage.getItem('pumpkins'));
    localStorage.setItem('pumpkins', JSON.stringify([...previousPumpkinsList, pumpkin]));
  }

  // getLoot(pumpkin, prevState) {
  //   this.setState({
  //     userInfos: {
  //       bondondex,
  //       points 
  //     }
  //   })
  // }


  render() {
    const { pumpkinsList } = this.state;
    return (
      <div className="App">
        <div>
          <Menu />
        </div>
        <div>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/map" exact render={(props) => 
            <Geolocalisation {...props} 
              pumpkinsList={pumpkinsList}
              updatePumpkinsList={this.updatePumpkinsList}
          />} />
          <Route path="/myprofile" exact component={Profile} />
          <Route path="/mycandydex" exact component={Dex} />
        </div>
      </div>
    );
  }
}

export default App;
