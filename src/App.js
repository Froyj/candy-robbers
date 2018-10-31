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
      },
      enemiesList: []
    };
    this.updatePumpkinsList = this.updatePumpkinsList.bind(this);
    this.updateEnemiesList = this.updateEnemiesList.bind(this);
    this.getLoot = this.getLoot.bind(this);
    this.getEnemyLoot= this.getEnemyLoot.bind(this);
  }

  initPumpkins() {
    let pumpkins = localStorage.getItem('pumpkins');
    if (!pumpkins) {
      pumpkins = require('./pumpkins.json');
      localStorage.setItem('pumpkins', JSON.stringify(pumpkins));
    } else {
      pumpkins = JSON.parse(pumpkins);
    }
    this.setState({
      pumpkinsList: pumpkins
    })
  }

  initEnemies() {
    let enemies = localStorage.getItem('enemies');
    if (!enemies) {
      enemies = require('./users.json');
      localStorage.setItem('enemies', JSON.stringify(enemies));
    } else {
      enemies = JSON.parse(enemies);
    }
    this.setState({
      enemiesList: enemies
    })
  }

  componentDidMount() {
    this.initPumpkins();
    this.initEnemies();
  }

  updatePumpkinsList(pumpkinsList) {
    const newPumpkinsList = pumpkinsList.filter((pumpkin) => !pumpkin.isOpen);
    this.setState({
      pumpkinsList: newPumpkinsList
    })
    localStorage.setItem('pumpkins', JSON.stringify(newPumpkinsList));
  }

  updateEnemiesList(enemiesList) {
    const newEnemiesList = enemiesList.filter((enemy) => !enemy.isProtected);
    this.setState({
      enemiesList: newEnemiesList
    })
    localStorage.setItem('enemies', JSON.stringify(newEnemiesList));
  }


  // addPumpkin() {
  //   const pumpkin = {
  //     "id": 8,
  //     "isOpen": false,
  //     "position": { lat: 43.60482, lng: 1.44728 },
  //     "reward": ["Caramel pourri", "80 points"]
  //   }
  //   if (!localStorage.getItem('pumpkins')) {
  //     localStorage.setItem('pumpkins', JSON.stringify([]));
  //   }
  //   const previousPumpkinsList = JSON.parse(localStorage.getItem('pumpkins'));
  //   localStorage.setItem('pumpkins', JSON.stringify([...previousPumpkinsList, pumpkin]));
  // }
  
  getEnemyLoot(enemy) {
    const newPointsAmount = this.state.userInfos.points + 200;
    this.setState({
      userInfos: {
        ...this.state.userInfos,
        points: newPointsAmount
      }
    });
  }
  
  getLoot(pumpkin) {
    const newPointsAmount = this.state.userInfos.points + pumpkin.reward.points;
    if (!this.state.userInfos.bonbondex.includes(pumpkin.reward.candies)) {
      this.setState(prevState => ({
        userInfos: {
          bonbondex: [...prevState.userInfos.bonbondex, pumpkin.reward.candies],
          points: newPointsAmount
        }
      }))
    }
    console.log(this.state.userInfos)
  }




  render() {
    const { pumpkinsList, enemiesList } = this.state;
    const { userInfos } = this.state;
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
              getLoot={this.getLoot}
              enemiesList={enemiesList}
              updateEnemiesList={this.updateEnemiesList}
              getEnemyLoot={this.getEnemyLoot}
            />}
          />
          <Route path="/myprofile" exact render={(props) => 
            <Profile {...props}
              userInfos={userInfos}
            />}
          />
          <Route path="/mycandydex" exact render={(props) =>
            <Dex {...props}
              userInfos={userInfos}
            />} />
        </div>
      </div>
    );
  }
}

export default App;
