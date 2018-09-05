import React, { Component } from 'react';
import CountryItem from './CountryItem';
import CountriesPager from './CountriesPager';
import { Pager} from 'react-bootstrap';

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      countriesPerPage: 15,
      lastPageNumber: 1
    }
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handlePageNumberClick(number) {
    this.setState({
      currentPage: number
    });
  }
  /* Handlers for pagination */
  handlePreviousPage(number) {
    this.setState({
      currentPage: number
    });
  }
  handleNextPage(number) {
    this.setState({
      currentPage: number
    });
  }
  calculatePageNumbers(countriesPerPage, allCountriesLength) {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountriesLength / countriesPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  render() {
    let { currentPage, countriesPerPage } = this.state;
    let allCountries = this.props.countries;

    let pageNumbers = this.calculatePageNumbers(countriesPerPage, allCountries.length);

    // Logic for displaying current countries
    let indexOfLastCountry = currentPage * countriesPerPage;
    let indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    let currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    let renderCountries = currentCountries.map((country, index) => {
      return(
        <CountryItem key={index} country={country} />
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

          <CountriesPager
            pageNumbers={pageNumbers}
            currentPage={currentPage}
            lastPageNumber={pageNumbers.length}
            onClick={this.handlePageNumberClick}
            onNextPage={this.handlePageNumberClick}
            onPreviousPage={this.handlePageNumberClick} />
      </div>
    );
  }
}

export default Countries;
