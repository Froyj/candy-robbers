import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

class UserMarker extends Component {
  render() {
    const { userPosition, isUserLocated } = this.props;
    const UserMarker = isUserLocated
      ? (
        <Marker position={userPosition}>
          <Popup>
            <span>Votre position</span>
          </Popup>
        </Marker>
      )
      : null;

    return UserMarker;
  }
}


export default UserMarker;
