import React, { Component } from 'react';
import {
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/Modal.css'

class LootModal extends Component {

  render() {
    const { lootAlert, clearLootAlert } = this.props;

    if (lootAlert === 'ok') {
      return (
        <div className="modal show modal-loot modal-style text-center" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p style={{ fontSize: '25px', marginBottom: '-5px' }}>Bravo ! Vous avez gagné une récompense <span role="img" aria-label="sheep">👻</span></p>
                <NavItem style={{ listStyle: 'none' }}>
                  <NavLink to="/mycandydex" tag={Link} className="text-center" style={{ color: 'orangered', fontSize: '15px' }}>Voir mon candydex</NavLink>
                </NavItem>
                <button style={{ fontSize: '17px' }} type="button" data-dismiss="modal" onClick={clearLootAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (lootAlert === 'trop loin') {
      return (
        <div className="modal show modal-loot modal-style text-center" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p style={{ fontSize: '25px' }}>Vous êtes trop loin pour récupérer cette récompense <span role="img" aria-label="sheep">👹</span></p>
                <button style={{ fontSize: '17px' }} type="button" data-dismiss="modal" onClick={clearLootAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LootModal;
