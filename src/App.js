import React, { Component } from 'react';
import $ from 'jquery';
import Countries from './Components/Countries';
import ModalTest from './Components/ModalTest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    }
  }

  getCountries() {
    $.ajax({
      url: 'https://restcountries.eu/rest/v2/all',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({countries:data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getCountries();
  }

  render() {
    return (
      <div className="container">
        <ModalTest />
        <Countries countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
