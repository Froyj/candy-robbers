import React, { Component } from 'react';
import Geolocation from 'react-geolocation';
import MapLayer from './MapLayer';
import '../css/Map.css';

class Geolocalisation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userPosition : {
  //       lat: undefined,
  //       lng: undefined
  //     }
  //   }
  // }

  render() {
    return (
      <Geolocation
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) => {
          const { pumpkinsList, updatePumpkinsList, getLoot } = this.props;
          const isUserLocated = latitude && longitude;
          const userPosition = isUserLocated ? [latitude, longitude] : [];
          console.log(userPosition)
          console.log(`fetching ${fetchingPosition} position: ${latitude}, ${longitude}`)
          return (
            <div className="App container-fluid">
              <MapLayer
                isUserLocated={isUserLocated}
                userPosition={userPosition}
                pumpkinsList={pumpkinsList}
                updatePumpkinsList={updatePumpkinsList}
                getLoot={getLoot}
              />
            </div>
          );
        }
        }
      />
    )
  }
}

export default Geolocalisation;