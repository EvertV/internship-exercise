import React, { Component } from 'react';

class CountriesPageNumbers extends Component {
  constructor() {
    super();
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
  }

  handlePageNumberClick(event) {
      // Foward currentPage to Countries.js with props
      this.props.onNavSearch(event.target.id);
  }

  render() {
    let {allCountries, countriesPerPage, currentPage} = this.props
    // Logic for displaying page numbers
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
      pageNumbers.push(i);
    }

    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handlePageNumberClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        <p>Current page: {currentPage}</p>
      </div>
    );
  }
}

export default CountriesPageNumbers;
