import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import Geolocation from 'react-geolocation';
import MapLayer from './components/MapLayer';
import Profile from './components/Profile';
import Dex from './components/Dex';

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
          <Route path="/" exact render={(props)=> 
              <Geolocation
                render={({
                  fetchingPosition,
                  position: { coords: { latitude, longitude } = {} } = {},
                  error,
                  getCurrentPosition
                }) => {
                  const isUserLocated = latitude && longitude;
                  const userPosition = isUserLocated ? [latitude, longitude] : [];
                  console.log(`fetching ${fetchingPosition} position: ${latitude}, ${longitude}`)
                  return (
                    <div className="App container-fluid">
                      <MapLayer 
                        isUserLocated={isUserLocated}
                        userPosition={userPosition}
                      />
                    </div>
                  );
                }
              }
            />}
          />
          <Route path="/myprofile" exact component={Profile}/>
          <Route path="/mycandydex" exact component={Dex}/>
          <Route path="/welcome" exact component={WelcomePage}/>

        </div>  
      </div>
    );
  }
}

export default App;
