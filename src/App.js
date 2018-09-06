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

  /* Get data with API calls */
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

  /* Handlers for navigation */
  handleNavClick(selection) {
    let page;
    switch(selection) {
      case "eu":
        page = this.showEUCountries();
        break;
      case "all":
        page = this.showAllCountries();
        break;
      default:
        page = this.showAllCountries();
    }

    this.setState({page:page});
  }
  handleNavSearch(keyword) {
    if(!(keyword === null || keyword === '')) {
      keyword = keyword.toLowerCase();
      // Use data that's already in memory to show subset of array
      // --> faster than API call (which would be 'https://restcountries.eu/rest/v2/name/' + keyword)
      let allCountries = this.state.countries;
      let countriesByKeyword = allCountries.filter(country => country.name.toLowerCase().includes(keyword));

      this.setState({
        countriesName:countriesByKeyword,
        page:this.showCountriesByName(countriesByKeyword)
      });
    } else {
      // show default page if keyword is empty
      this.setState({page:this.showAllCountries()});
    }
  }

  /* Helper functions to display pages */
  showAllCountries(){
    return <Countries title="All countries" countries={this.state.countries}/>;
  }
  showEUCountries(){
    return <Countries title="EU countries" countries={this.state.countriesEU}/>;
  }
  showCountriesByName(countriesName){
    return <Countries title="Searching all countries..." countries={countriesName} />;
  }

  /* Get data on launch of app */
  componentWillMount() {
    this.getCountries();
    this.getCountriesEU();
  }

  render() {
    let page = this.state.page;
    if(!page) {
      page = this.showAllCountries(); // show all countries on launch
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
