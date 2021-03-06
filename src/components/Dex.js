import React, { Component } from 'react';
import Bonbons from './Bonbons';
import dataBonbons from '../dataBonbons.json';
import '../css/Dex.css'

class Dex extends Component {
  render() {
    return (
      <div className="container">
      <h3 className="my-4 dex-titre">Dex : mes bonbons d'Halloween</h3>
          {dataBonbons.map(bonbon => {
            const isIncluded = this.props.userInfos.bonbondex.includes(bonbon.id.toString())
            return (
              <Bonbons isIncluded={isIncluded} key={bonbon.id} image={bonbon.image} nom={bonbon.nom}/>
            )})}
      </div>
    );
  }
}

export default Dex;
