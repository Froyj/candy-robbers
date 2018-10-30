import React from 'react';
import { Jumbotron, Container, Button, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import '../App.css';

const WelcomePage = (props) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
        <Card inverse>
        <CardImg fluid width="100%" src="https://images.frandroid.com/wp-content/uploads/2016/10/halloween-illustration.jpg" />
        <CardImgOverlay>
          <CardTitle><h1 className="logo">the Candy Robbers</h1></CardTitle>
          <CardText className="wlcbutton">
          <Button color="warning" size="lg">TOC TOC TOC</Button>   
          </CardText>
        </CardImgOverlay>
      </Card>
        </Container>
      </Jumbotron>
  );
};

export default WelcomePage;