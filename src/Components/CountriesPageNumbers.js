import React, { Component } from 'react';

class CountriesPageNumbers extends Component {
  constructor() {
    super();
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
  }

  handlePageNumberClick(event) {
      // Foward currentPage to Countries.js with props
      this.props.onClick(event.target.id);
  }
  calculatePageNumbers() {
    let {allCountries, countriesPerPage} = this.props;

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  renderPageNumbers(pageNumbers) {
    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handlePageNumberClick}>
          {number}
        </li>
      );
    });
    return renderPageNumbers;
  }

  render() {
    let currentPage = this.props.currentPage;
    let pageNumbers = this.calculatePageNumbers();
    let renderPageNumbers = this.renderPageNumbers(pageNumbers);

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
