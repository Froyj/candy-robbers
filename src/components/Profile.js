import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import pumpkin from '../icons/pumpkin.png'
import beer from '../icons/beer.png'
import thief from '../icons/thief.png'
import candies from '../icons/candies.png'


class Profile extends Component {

  render() {
    return (
      <Container>
        <div className="user-infos">
          <Row>
            <Col xs="4" md="6">
              <img className="img-profile img-fluid" src="https://i.imgur.com/ciNnMvL.png" />
            </Col>
            <Col xs="8" md="6">
              <Row>
                <h2>Cthulu Occultist</h2>
                <p>Maître des friandises</p>
                <p>Points : 587 pts</p>
                <div>
                  <span>Classement:</span><a href="#"> 345pt</a>
                  <a href="#">Voir mon candydex</a>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs="12">
            <div className="distinctions">
              <h3>Distinctions</h3>
              <h4>Collections :</h4>
              <p>
                <img src={candies} />
                <img src={pumpkin} />
              </p>
              <h4>Bounty hunter :</h4>
              <p>
                <img src={beer} />
                <img src={thief} />
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Profile;
