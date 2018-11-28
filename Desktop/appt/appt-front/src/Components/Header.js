import React, { Component } from 'react';
import {
  Navbar
} from 'react-bootstrap'

class Header extends Component {

  render() {
    return (
      <div>
        <h2><center> Flexbox Apartment Mangagement </center></h2>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">FAM</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> Menu <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="/Home">Home</a></li>
                <li><a href="#">Apartments</a></li>
                <li><a href="#">About FAM</a></li>
              </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"> Log In </a></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Header;
