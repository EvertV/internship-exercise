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
      countriesName: [],
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
      page = this.showEUCountries();
    } else {
      page = this.showAllCountries();
    }
    this.setState({page:page});
  }
  handleNavSearch(keyword) {
    if(!(keyword === null || keyword === '')) {
      // Use data that's already in memory to show subset of array
      // --> faster than API call ('https://restcountries.eu/rest/v2/name/' + keyword)
      keyword = keyword.toLowerCase();
      let allCountries = this.state.countries;
      let countriesName = allCountries.filter(country => country.name.toLowerCase().includes(keyword));
      let page = <Countries title="Searching all countries..." countries={countriesName} />;
      this.setState({page:page});
      this.setState({countriesName:countriesName});
    } else {
      // show default page if keyword is empty
      this.setState({page:this.showAllCountries()});
    }
  }
  showAllCountries(){
    return <Countries title="All countries" countries={this.state.countries} />;
  }
  showEUCountries(){
    return <Countries title="EU countries" countries={this.state.countriesEU} />;
  }

  componentWillMount() {
    this.getCountries();
    this.getCountriesEU();
  }

  render() {
    let page = this.state.page;
    if(!page) {
      page = this.showAllCountries();
    }
    return (
      <div className="container">
        <Navigation onNavClick={this.handleNavClick.bind(this)} onNavSearch={this.handleNavSearch.bind(this)}/>
        {page}
      </div>
    );
  }
}

export default App;
