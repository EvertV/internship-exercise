import React, { Component } from 'react';

class CountryItem extends Component {
  render() {
    return (
      <tr className="CountryItem">
        <td>
          {this.props.country.name}
        </td>
        <td>
          {this.props.country.capital}
        </td>
        <td>
          {this.props.country.alpha2Code}
        </td>
      </tr>
    );
  }
}

export default CountryItem;
