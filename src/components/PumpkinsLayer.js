import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import pumpkinIcon from '../icons/pumpkin.png';


import '../css/Map.css';

class PumpkinsLayer extends Component {
  
  readStoredPumpkins() {
    const pumpkins = JSON.parse(localStorage.getItem('pumpkins'));
    return pumpkins || [];
  }

  render() {
    const pumpkinsList = this.readStoredPumpkins();
    console.log(pumpkinsList);
    
    const allPumpkins = pumpkinsList.map(pumpkin => (
      <Marker
        icon={L.divIcon({
          className: 'custom-icon',
          html: ReactDOMServer.renderToString(
            <img src={pumpkinIcon} alt="citrouille" style={{width: "40px", height:"40px"}}/>
          ),
          iconSize: [40, 40]
        })}
        position={[pumpkin.position.lat, pumpkin.position.lng]}
        key={`marker_${pumpkin.id}`}
      />
    ));

    return (
      <div id="map" className="map-container">
        {allPumpkins}
      </div>
    );
  }
}

export default PumpkinsLayer;
