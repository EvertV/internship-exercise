import React, { Component } from 'react';
import $ from 'jquery';
import Countries from './Components/Countries';
import Navigation from './Components/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      countriesEU: [],
      page: ''
    }
  }

  getCountries() {
    $.ajax({
      url: 'https://restcountries.eu/rest/v2/all',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({countries:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }
  getCountriesEU() {
    $.ajax({
      url: 'https://restcountries.eu/rest/v2/regionalbloc/eu',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({countriesEU:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }
  handleNavClick(selection) {
    let page;
    if(selection === "eu") {
      page = <Countries title="EU Countries" countries={this.state.countriesEU} />;
    } else {
      page = <Countries title="All Countries" countries={this.state.countries} />;
    }
    this.setState({page:page});
  }

  componentWillMount() {
    this.getCountries();
    this.getCountriesEU();
  }

  render() {
    let page = this.state.page;
    if(!page) {
      page = <Countries title="All Countries" countries={this.state.countries} />;
    }
    return (
      <div className="container">
        <Navigation onNavClick={this.handleNavClick.bind(this)} />
        {page}
      </div>
    );
  }
}

export default App;
