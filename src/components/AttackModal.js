import React, { Component } from 'react';

class AttackModal extends Component {

  render() {
    const { attackAlert, clearAttackAlert } = this.props;

    if (attackAlert === 'ok') {
      return (
        <div className="modal show modal-attack" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p>Bravo, vous avez gagné une récompense</p>
                <button type="button" data-dismiss="modal" onClick={clearAttackAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (attackAlert === 'trop loin') {
      return (
        <div className="modal show modal-attack" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p>Vous êtes trop loin pour recuperer cette récompense</p>
                <button type="button" data-dismiss="modal" onClick={clearAttackAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

  export default AttackModal;
