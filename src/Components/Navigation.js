import React, { Component } from 'react';
import {Nav, Navbar, NavItem, FormControl} from 'react-bootstrap';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
        modalOpened: false
    };
  }
  handleClick(selection) {
    this.props.onNavClick(selection);   
  }
  handleChange(event) {
    console.log(event);
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Internship exercise</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={this.handleClick.bind(this, "all")} href="#">
            All Countries
          </NavItem>
          <NavItem onClick={this.handleClick.bind(this, "eu")} href="#">
            EU Countries
          </NavItem>
          <NavItem>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Search country"
              onChange={this.handleChange}
            />
          </NavItem >
        </Nav>
        </Navbar>
    );
  }
}

export default Navigation;
