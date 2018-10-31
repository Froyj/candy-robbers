import React, { Component } from 'react';

class LootModal extends Component {

  render() {
    const { lootAlert, clearLootAlert } = this.props;

    if (lootAlert === 'ok') {
      return (
        <div className="modal show modal-loot" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <p>Bravo, vous avez gagné une récompense</p>
                <button type="button" data-dismiss="modal" onClick={clearLootAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (lootAlert === 'trop loin') {
      return (
        <div className="modal show modal-loot" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p>Vous êtes trop loin pour recuperer cette récompense</p>
                <button type="button" data-dismiss="modal" onClick={clearLootAlert}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

  export default LootModal;
