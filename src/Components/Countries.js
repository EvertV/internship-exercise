import React, { Component } from 'react';
import CountryItem from './CountryItem';
import CountriesPageNumbers from './CountriesPageNumbers';
import { Pager} from 'react-bootstrap';

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      countriesPerPage: 15
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
    let { currentPage, countriesPerPage } = this.state;
    let allCountries = this.props.countries;

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
          <Pager>
            <Pager.Item previous href="#" onClick={this.handlePreviousPage}>
              &larr; Previous Page
            </Pager.Item>
            <Pager.Item next href="#" onClick={this.handleNextPage}>
              Next Page &rarr;
            </Pager.Item>

            <CountriesPageNumbers
              allCountries={allCountries}
              countriesPerPage={countriesPerPage}
              currentPage={currentPage}
              onNavSearch={this.handlePageNumberClick} />
          </Pager>
      </div>
    );
  }
}

export default Countries;
