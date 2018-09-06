import React, { Component } from 'react';
import CountryItemModal from './CountryItemModal';

class CountryItem extends Component {
  constructor() {
    super();
    this.state = {
        modalOpened: false
    };
  }
  /* Handlers for modal*/
  handleClick() {
    if(this.state.modalOpened === false) {
      this.setState({modalOpened: true});
    }
  }
  handleClose() {
    this.setState({modalOpened: false});
  }

  render() {
    return (
        <tr className="countryRow" onClick={this.handleClick.bind(this)}>
          <td>
            {this.props.country.name}
          </td>
          <td>
            {this.props.country.capital}
          </td>
          <td>
            {this.props.country.alpha2Code}
          </td>
          <CountryItemModal show={this.state.modalOpened} onHide={this.handleClose.bind(this)} country={this.props.country}/>
        </tr>
    );
  }
}

export default CountryItem;
