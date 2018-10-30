import React, { Component } from 'react';
import Bonbons from './Bonbons';
import dataBonbons from './dataBonbons.json';

class Dex extends Component {
  render() {
    return (
      <div>
          {dataBonbons.map(bonbon => (
          <Bonbons key={bonbon.id} image={bonbon.image} nom={bonbon.nom}/>
          ))}
      </div>
    );
  }
}

export default Dex;
