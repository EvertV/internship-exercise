import React, { Component } from 'react';
import CountryItem from './CountryItem';
import uuid from 'uuid';

class Countries extends Component {
  render() {
    var countryItems;
    if(this.props.countries) {
      countryItems = this.props.countries.map(country => {
        return(
          <CountryItem key={uuid.v4()} country={country} />
        );
      })
    }
    return (
      <div className="Countries">
      <h1>All Countries</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Alpha2Code</th>
            </tr>
          </thead>
          <tbody>
            {countryItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Countries;
