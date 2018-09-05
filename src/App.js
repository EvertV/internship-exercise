import React, { Component } from 'react';
import $ from 'jquery';
import Countries from './Components/Countries';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      countriesEU: []
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
  componentWillMount() {
    this.getCountries();
    this.getCountriesEU();
  }

  render() {
    return (
      <div className="container">
        <Countries title="All Countries" countries={this.state.countries}/>
        <Countries title="EU Countries" countries={this.state.countriesEU}/>
      </div>
    );
  }
}

export default App;
