import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

class CountriesPager extends Component {
  handlePageNumberClick(event) {
      // Foward currentPage to Countries.js with props
      this.props.onClick(event.target.id);
  }

  /* Handlers for pagination */
  handlePreviousPage() {
    var previousPageNumber = Number(this.props.currentPage) - 1;
    if(!(previousPageNumber < 1)) {
      this.setState({
        currentPage: previousPageNumber
      });
      // Foward previousPageNumber to Countries.js with props
      this.props.onNextPage(previousPageNumber);
    }
  }
  handleNextPage(amountOfPages) {
    var nextPageNumber = Number(this.props.currentPage) + 1;
    if(!(nextPageNumber > amountOfPages)) {
      this.setState({
        currentPage: nextPageNumber
      });
      // Foward nextPageNumber to Countries.js with props
      this.props.onPreviousPage(nextPageNumber);
    }
  }

  calculatePageNumbers(countriesPerPage, allCountriesLength) {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountriesLength / countriesPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  renderPageNumbers(pageNumbers) {
    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handlePageNumberClick.bind(this)}>
          {number}
        </li>
      );
    });
    return renderPageNumbers;
  }

  render() {
    let pageNumbers = this.calculatePageNumbers(this.props.countriesPerPage, this.props.allCountriesLength);
    let renderPageNumbers = this.renderPageNumbers(pageNumbers);

    /* Used to display position */
    let currentPage = this.props.currentPage;
    let amountOfPages = pageNumbers.length;
    if(amountOfPages === 0) {
      amountOfPages = 1; // to prevent "Page 1 of 0"
    }

    return (
      <Pager>
        <Pager.Item previous href="#" onClick={this.handlePreviousPage.bind(this)}>
          &larr; Previous Page
        </Pager.Item>
        <Pager.Item next href="#" onClick={this.handleNextPage.bind(this, amountOfPages)}>
          Next Page &rarr;
        </Pager.Item>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        <p>Page {currentPage} of {amountOfPages}</p>
      </Pager>
    );
  }
}

export default CountriesPager;
