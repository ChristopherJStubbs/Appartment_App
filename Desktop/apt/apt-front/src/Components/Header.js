import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

class Header extends Component {

  render() {
    // if(this.auth.loggedIn()==true) {
    //   loginButton = <li onClick = {this.logout}></li>
    // } else {
    //   loginButton = <li><a href= '/login'></a></li>
    // }
    return (
      <div>
          <Navbar className="navbar navbar-inverse">
            <h2 className = "CompanyName"> Flexbox Apartment Mangagement </h2>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/home">FAM</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                <MenuItem href='/Home'>Home</MenuItem>
                <MenuItem href='/apartments'>Apartments</MenuItem>
                <MenuItem href='/about'>About</MenuItem>
                <MenuItem divider />
                <MenuItem href='/Signup'>Sign Up</MenuItem>
                <MenuItem href='/login'>Login</MenuItem>
              </NavDropdown>
            </Nav>

          </Navbar>
      </div>
    );
  }
}

export default Header;
