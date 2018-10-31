import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import pumpkin from '../icons/pumpkin.png'
import beer from '../icons/beer.png'
import thief from '../icons/thief.png'
import candies from '../icons/candies.png'
import halloweenAvatar from '../icons/halloweenAvatar.png'
import '../css/Profile.css'
import {
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Profile extends Component {

  render() {
    const { userInfos } = this.props;
    return (
      <Container>
        <div className="user-infos mt-4">
          <Row className="d-flex justify-content-center">
            <Col xs="12 text-center">
              <img alt="Halloween Avatar" className="halloween-avatar" src={halloweenAvatar} />
            </Col>
            <Col xs="12">
              <Row className="mt-3 typo-profile">
                <Col xs="12">
                  <h1 className="text-center">Franck Occultist</h1>
                </Col>
                <Col xs="12">
                  <p className="taille-typo text-center">Maître des friandises</p>
                </Col>
                <Col xs="12">
                  <p className="taille-typo text-center">Points : <span style={{ color: 'orangered' }}>{userInfos.points} points</span></p>
                </Col>
                <Col xs="12">
                  <NavItem style={{listStyle: 'none'}}>
                    <NavLink to="/mycandydex" tag={Link} className="text-center" style={{ color: 'orangered', textDecoration: 'underline' }}>Voir mon candydex</NavLink>
                  </NavItem>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Row className="carte-distinctions text-center mb-3">
          <Col xs="12 d-flex justify-content-center">
            <div className="distinctions">
              <h2 className="text-center mb-3">Distinctions</h2>
              <h4 className="mb-3 mt-2">Collections :</h4>
              <p>
                <img src={candies} alt="bonbons"/>
                <img src={pumpkin} alt="citrouille"/>
              </p>
              <h4 className="mb-3 mt-2">Bounty hunter :</h4>
              <p>
                <img src={beer}/>
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
