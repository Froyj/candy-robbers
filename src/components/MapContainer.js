import React, { Component } from 'react';
import MapLayer from './MapLayer';

class MapContainer extends Component {
  render() {
    return (
      <div id="mapContainer" className="map-container">
        <MapLayer />
      </div>
    );
  }
}
export default MapContainer;
