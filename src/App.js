import React, { Component } from 'react';



import Geolocation from 'react-geolocation'
import MapLayer from './components/MapLayer'

import './App.css';
import './css/Map.css';



class App extends Component {

  render() {
    return (

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
        }}
      />
    );
  }
}

export default App;
