import React, { Component } from 'react';
import './css/Dex.css';
import checkON from './checkON.png'
import checkOFF from './checkOFF.png'

class Bonbons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: "orange" }}>
        <div className="row d-flex align-items-center my-2 py-2">
          <div className="col-2 ml-1">
            <img style={{ width: '13vw' }} src={this.props.image} alt={this.props.nom} />
          </div>
          <div className="col-7 bonbon-nom ml-1">
            <span>{this.props.nom}</span>
          </div>
          <div className="col ml-2">
            <img style={{ width: '6vw' }} src={this.state.checked ? checkON : checkOFF } alt="CHECK!" />
          </div>
        </div>
      </div>
    );
  }
}


export default Bonbons;