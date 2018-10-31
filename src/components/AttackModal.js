import React, { Component } from 'react';
import '../css/Modal.css'

class AttackModal extends Component {

  render() {
    const { attackAlert, clearAttackAlert } = this.props;

    if (attackAlert === 'ok') {
      return (
        <div className="modal show modal-loot modal-style text-center" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p style={{ fontSize: '25px', marginBottom: '-5px' }}>Vous avez bolossé un autre chasseur de bonbons ! Vous avez gagné 200 points et il en a perdu 200 point</p>
                <button style={{ fontSize: '17px' }} type="button" data-dismiss="modal" onClick={clearAttackAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (attackAlert === 'trop loin') {
      return (
        <div className="modal show modal-loot modal-style text-center" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p style={{ fontSize: '25px' }}>Vous êtes trop loin pour attaquer ce joueur</p>
                <button style={{ fontSize: '17px' }} type="button" data-dismiss="modal" onClick={clearAttackAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

  export default AttackModal;
