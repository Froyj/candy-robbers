import React from 'react';
import { Jumbotron, Container, Button, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {
  return (
    <div>
      {/* <img style={{height: '100%'}} src="https://images.frandroid.com/wp-content/uploads/2016/10/halloween-illustration.jpg" alt="Halloween" /> */}
      <div className="position-bouton">
        <Button to="/map" tag={Link} size="lg" className="wlcbutton" >TOC TOC TOC</Button>
      </div>
    </div>
  );
};

export default WelcomePage;