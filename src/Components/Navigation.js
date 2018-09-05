import React, { Component } from 'react';
import {Nav, Navbar, NavItem, FormControl} from 'react-bootstrap';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
        modalOpened: false,
        searchValue: ''
    };
  }
  handleClick(selection) {
    this.props.onNavClick(selection);
  }
  handleChange(e) {
    let searchValue = e.target.value;
    this.setState({searchValue:searchValue})
    this.props.onNavSearch(searchValue);
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={this.handleClick.bind(this, "all")}>Internship exercise</a>
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
              value={this.state.searchValue}
              placeholder="Search country"
              onChange={this.handleChange.bind(this)}
            />
          </NavItem >
        </Nav>
        </Navbar>
    );
  }
}

export default Navigation;
