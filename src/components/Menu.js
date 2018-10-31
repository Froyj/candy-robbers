import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  hideNavbar = () => {
    this.setState ({
      isOpen:false
    })
  }
  render() {
    return (
      <div className="navbar-position">
        <Navbar style={{backgroundColor: "orange"}} light expand="md" className="py-3">
          <NavbarBrand to="" tag={Link}>the Candy Robbers</NavbarBrand>
          <NavbarToggler 
          onClick={this.toggle} />
          <Collapse 
          isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.hideNavbar}
                to="/map" tag={Link}>Carte</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.hideNavbar}
                to="/mycandydex" tag={Link}>Candydex</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.hideNavbar}
                to="/myprofile" tag={Link}>Profil</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;