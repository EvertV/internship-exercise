import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';

class CountryItemModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  /* Handler for closing modal */
  handleClose() {
    // Foward onHide to CountryItem with props
    this.props.onHide();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.country.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Alpha2code</th>
                <th>Region</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{this.props.country.name}</td>
              <td>{this.props.country.capital}</td>
              <td>{this.props.country.alpha2Code}</td>
              <td>{this.props.country.region}</td>
              <td>{this.props.country.population}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CountryItemModal;
