import React, { Component } from 'react';
import CountryItem from './CountryItem';
import { Pager} from 'react-bootstrap';

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      countriesPerPage: 10
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  handlePreviousPage() {
    var previousPageNumber = this.state.currentPage - 1;
    this.setState({
      currentPage: previousPageNumber
    });
  }
  handleNextPage() {
    var nextPageNumber = this.state.currentPage + 1;
    this.setState({
      currentPage: nextPageNumber
    });
  }
  render() {
    const { currentPage, countriesPerPage } = this.state;
    const allCountries = this.props.countries;

    // Logic for displaying current countries
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    const renderCountries = currentCountries.map((country, index) => {
      return(
        <CountryItem key={index} country={country} />
      );});

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div className="Countries">
        <h1>{this.props.title}</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Alpha2Code</th>
              </tr>
            </thead>
            <tbody>
              {renderCountries}
            </tbody>
          </table>
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
            <p>Current page: {currentPage}</p>
          </Pager>
      </div>
    );
  }
}

export default Countries;
