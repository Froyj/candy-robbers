import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import AttackModal from './AttackModal';
import enemyIcon from '../icons/enemy.png';


import '../css/Map.css';

class EnemiesLayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      enemiesList: props.enemiesList,
      attackAlert: ''
    };
    this.clearAttackAlert = this.clearAttackAlert.bind(this);
  }

  readStoredEnemies() {
    const enemies = JSON.parse(localStorage.getItem('enemies'));
    return enemies || [];
  }

  attackEnemy(enemy) {
    const newEnemy = {...enemy, isProtected:true};
    const enemiesList = this.state.enemiesList.map(enemy =>
      enemy.id === newEnemy.id ? newEnemy : enemy
    );
    this.setState({
      enemiesList
    })
    this.props.updateEnemiesList(enemiesList);
    this.props.getEnemyLoot(enemy);
  }

  handleClickEnemy (enemy) {
    if (enemy.isProtected) { return }
    if (Math.abs(this.props.userPosition[0] - enemy.position.lat) < 0.0004 
    && Math.abs(this.props.userPosition[1] - enemy.position.lng) < 0.0004) {
      this.attackEnemy(enemy);
      this.setState({
        attackAlert: 'ok'
      })
    } else {
      this.setState({
        attackAlert: 'trop loin'
      })
    }
    console.log(this.state.attackAlert)
  }

  clearAttackAlert () {
    this.setState({
      attackAlert: ''
    })
  }

  render() {
    console.log(this.props.enemiesList);

    const { attackAlert } = this.state;
    const enemiesList = this.readStoredEnemies();
    console.log(enemiesList);
    
    const allEnemies = enemiesList.map(enemy => (
      <Marker
        icon={L.divIcon({
          className: 'custom-icon',
          html: ReactDOMServer.renderToString(
            <img src={enemyIcon} alt="La mort" style={{width: "40px", height:"40px"}}/>
          ),
          iconSize: [40, 40]
        })}
        position={[enemy.position.lat, enemy.position.lng]}
        key={enemy.id}
        onClick={() => this.handleClickEnemy(enemy)}
      />
    ));
    
    const display = this.state.attackAlert ?(
      <AttackModal 
          attackAlert={attackAlert}
          clearAttackAlert={this.clearAttackAlert}
      />)
      : null;


    return (
      <div id="map" className="">
        {allEnemies}
        {display}   
      </div>
    );
  }
}

export default EnemiesLayer;
