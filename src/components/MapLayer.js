import React, { Component } from 'react';

import {
  Map, TileLayer, type Viewport
} from 'react-leaflet';

import UserMarker from './UserMarker'


import '../css/Map.css';


const defaultCenter = [43.599761799999996, 1.443197];
const defaultZoom = 15;

class MapLayer extends Component<
  {},
  { viewport: Viewport },
  > {
  state = {
    viewport: defaultCenter,
  }

  constructor(props) {
    super(props);
    this.state = {
      startCenter : defaultCenter.center,
      zoom: defaultZoom,
      pumpkins: []
    };
    this.centerOnUser = this.centerOnUser.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('pumpkins')) {
      localStorage.setItem('pumpkins', JSON.stringify([]));
    }
    const pumpkins = require('../pumpkins.json'); 
    localStorage.setItem('pumpkins', JSON.stringify(pumpkins));
    this.setState(
      pumpkins
    )
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
    const { userPosition, isUserLocated, updatePumpkinsList } = this.props
    const { zoom, viewport } = this.state;

    return (
      <div id="map" className="map-container" onLoad={() => updatePumpkinsList(this.state.pumpkins)}>
        <Map
          className="map__reactleaflet"
          center={defaultCenter}
          zoom={zoom}
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          <UserMarker
            userPosition={userPosition}
            isUserLocated={isUserLocated}
          />
        </Map>
        
      </div>
    );
  }
}

export default MapLayer;
