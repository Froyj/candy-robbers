import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import Geolocation from 'react-geolocation'
import MapLayer from './components/MapLayer'

import './App.css';
import './css/Map.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <div>
          <Route path="/" exact component={}/>  

            {/* debut appel geoloc */}
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
              />
            {/* fin appel geoloc */}
        </div>
      </div>
    );
  }
}

export default App;
