import React, { Component } from 'react';
import {Nav, Navbar, NavItem, FormControl, FormGroup} from 'react-bootstrap';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
        modalOpened: false,
        searchValue: ''
    };
  }
  /* Handlers, mostly forwarding to app.js */
  handleClick(selection) {
    this.props.onNavClick(selection);
  }
  handleChange(e) {
    let searchValue = e.target.value;
    this.setState({searchValue:searchValue})
    // Foward onNavSearch to App.js with props
    this.props.onNavSearch(searchValue);
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <span onClick={this.handleClick.bind(this, "all")}>Internship exercise</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={this.handleClick.bind(this, "all")}>
            All Countries
          </NavItem>
          <NavItem onClick={this.handleClick.bind(this, "eu")}>
            EU Countries
          </NavItem>
        </Nav>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl
            type="text"
            value={this.state.searchValue}
            placeholder="Search"
            onChange={this.handleChange.bind(this)} />
          </FormGroup>
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default Navigation;
