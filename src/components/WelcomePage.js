import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import halloweenIllustration from '../icons/halloweenIllustration.jpg'
import Cri from '../audio/SF-femme.mp3';

const WelcomePage = () => {
  const cri = new Audio (Cri);
  return (
    <div>
      <img style={{position: 'fixed', height: 'calc(100vh - 90px)', zIndex: '0'}} src={halloweenIllustration} alt="Halloween" />
      <div className="position-bouton">
        <Button 
        to="/map" tag={Link} size="lg" className="style-bouton" >TOC TOC TOC</Button>
      </div>
    </div>
  );
};

export default WelcomePage;