import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import halloweenIllustration from '../icons/halloweenIllustration.jpg'

const WelcomePage = () => {
  return (
    <div>
      <img style={{position: 'fixed'}} src={halloweenIllustration} alt="Halloween" />
      <div className="position-bouton">
        <Button to="/map" tag={Link} size="lg" className="wlcbutton" >TOC TOC TOC</Button>
      </div>
    </div>
  );
};

export default WelcomePage;