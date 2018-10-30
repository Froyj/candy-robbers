import React, { Component } from 'react';
import axios from 'axios';

import {
  Map, TileLayer, type Viewport
} from 'react-leaflet';

import { apiKey } from './settings';
import MapControls from './MapControls';
import MarkersLayer from './MarkersLayer';
import UserMarker from './UserMarker';

const defaultCenter = {
  center: [43.599761799999996, 1.443197],
  zoom: 15
};

class MapLeaflet extends Component<
  {},
  { viewport: Viewport },
  > {
  state = {
    viewport: defaultCenter,
  }

  constructor(props) {
    super(props);
    this.state = {
      zoom: defaultCenter.zoom,
      stationsList: [],
      apiDataError: null,
      isLoading: false,
      panelToDisplay: ''
    };
    this.refreshStationsList = this.refreshStationsList.bind(this);
    this.centerOnUser = this.centerOnUser.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  clearError() {
    this.setState({ apiDataError: null });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  centerOnUser(userPosition) {
    this.setState({
      viewport: {
        center: userPosition,
        zoom: 15
      }
    })
  }

  render() {

    const {
      getCurrentPosition,
      userPosition,
      isUserLocated,
    } = this.props;

    const { zoom, stationsList, viewport, apiDataError } = this.state;
    const [latitude, longitude] = userPosition;
    console.log(`latitude et longitude ${latitude}, ${longitude}, ${userPosition}`)

    // console.log(`is fetching : ${fetchingPosition}, is user located : ${isUserLocated} `);
    // console.log(`latitude = ${latitude} and longitude = ${longitude}`);

    return (
      <div className="map">
        <Map
          className="map__reactleaflet"
          center={userPosition}
          zoom={zoom}
          onClick={displayFeature}
          viewport={viewport}
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          <MarkersLayer
            userPosition={userPosition}
          />
          <MapControls
            getCurrentPosition={getCurrentPosition}
            centerOnUser={this.centerOnUser}
            refreshStationsList={this.refreshStationsList}
            displayFeature={displayFeature}
          />
          <UserMarker
            latitude={latitude}
            longitude={longitude}
            isUserLocated={isUserLocated}
          />
        </Map>
        );
      }}
    />
      </div>
    );
  }
}

export default MapLeaflet;
