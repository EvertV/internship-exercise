import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

class CountriesPager extends Component {
  constructor() {
    super();

    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

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
  handleNextPage() {
    var nextPageNumber = Number(this.props.currentPage) + 1;
    if(!(nextPageNumber > this.props.amountOfPages)) {
      this.setState({
        currentPage: nextPageNumber
      });
      // Foward nextPageNumber to Countries.js with props
      this.props.onPreviousPage(nextPageNumber);
    }
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
    let amountOfPages = this.props.amountOfPages;
    let renderPageNumbers = this.renderPageNumbers(this.props.pageNumbers);

    return (
      <Pager>
        <Pager.Item previous href="#" onClick={this.handlePreviousPage}>
          &larr; Previous Page
        </Pager.Item>
        <Pager.Item next href="#" onClick={this.handleNextPage}>
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
