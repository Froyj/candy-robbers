import React, { Component } from 'react';

import {
  Map, TileLayer, type Viewport
} from 'react-leaflet';

import UserMarker from './UserMarker'


import '../css/Map.css';


const defaultCenter = [43.599761799999996, 1.443197];
const defaultZoom = 15;

class PumpkinsLayer extends Component<
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
      zoom: defaultZoom
    };
    this.centerOnUser = this.centerOnUser.bind(this);
  }


  render() {
    const { userPosition, isUserLocated } = this.props
    const { zoom, viewport } = this.state;

    return (
      <div id="map" className="map-container">
        
      </div>
    );
  }
}

export default PumpkinsLayer;
