import React, { Component } from 'react';
import CountryItemModal from './CountryItemModal';

class CountryItem extends Component {
  constructor() {
    super();
    this.state = {
        modalOpened: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if(this.state.modalOpened === true) {
      this.setState({modalOpened: false}); // Not the best solution --> TO-DO: make this work better/cleaner
    } else {
      this.setState({modalOpened: true});
    }
  }
  render() {
    return (
        <tr onClick={this.handleClick}>
          <td>
            {this.props.country.name}
          </td>
          <td>
            {this.props.country.capital}
          </td>
          <td>
            {this.props.country.alpha2Code}

            <CountryItemModal show={this.state.modalOpened} country={this.props.country}/>
          </td>
        </tr>
    );
  }
}

export default CountryItem;
