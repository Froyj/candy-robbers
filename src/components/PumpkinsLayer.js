import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import LootModal from './LootModal';
import pumpkinIcon from '../icons/pumpkin.png';


import '../css/Map.css';

class PumpkinsLayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pumpkinsList: props.pumpkinsList,
      lootAlert: ''
    };
    this.clearLootAlert = this.clearLootAlert.bind(this);
  }

  readStoredPumpkins() {
    const pumpkins = JSON.parse(localStorage.getItem('pumpkins'));
    return pumpkins || [];
  }

  openPumpkin(pumpkin) {
    const newPumpkin = {...pumpkin, isOpen:true};
    const pumpkinsList = this.state.pumpkinsList.map(pumpkin =>
      pumpkin.id === newPumpkin.id ? newPumpkin : pumpkin
    );
    this.setState({
      pumpkinsList
    })
    this.props.updatePumpkinsList(pumpkinsList);
    this.props.getLoot(pumpkin);
  }

  handleClickPumpkin (pumpkin) {
    if (Math.abs(this.props.userPosition[0] - pumpkin.position.lat) < 0.0004 
    && Math.abs(this.props.userPosition[1] - pumpkin.position.lng) < 0.0004) {
      this.openPumpkin(pumpkin);
      this.setState({
        lootAlert: 'ok'
      })
    } else {
      this.setState({
        lootAlert: 'trop loin'
      })
      console.log('trop loin')
      console.log(`user lat :${this.props.userPosition[0]} user lng :${this.props.userPosition[1]}`)
    }
  }

  clearLootAlert () {
    this.setState({
      lootAlert: ''
    })
  }

  render() {
    const { lootAlert } = this.state;
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
        onClick={() => this.handleClickPumpkin(pumpkin)}
      />
    ));
    
    const display = lootAlert ?(
      <LootModal 
          lootAlert={lootAlert}
          clearLootAlert={this.clearLootAlert}
      />)
      : null;


    return (
      <div id="map" className="">
        {allPumpkins}
        {display}   
      </div>
    );
  }
}

export default PumpkinsLayer;
