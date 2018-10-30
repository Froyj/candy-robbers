import React, { Component } from 'react';
import Geolocation from 'react-geolocation'
import MapLayer from './components/MapLayer'
import Profile from './components/Profile'
import Dex from './Dex'


import './css/App.css';
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

  updatePumpkinsList (pumpkinsList) {
    this.setState({
      pumpkinsList
    })
  }

  render() {
    return (
      <div>
        <Dex />
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
                <Profile />
                <MapLayer
                  isUserLocated={isUserLocated}
                  userPosition={userPosition}
                  updatePumpkinsList={this.updatePumpkinsList}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
