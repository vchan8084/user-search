import React from 'react';
/* Axios: HTTP client */
/* Decided to use axios because I've used it before with React apps and it easily fetches data from APIs. The response is automatically returned in json format which is handy. */
import axios from 'axios';

/* Used these libraries for pagination */
import * as parse from 'parse-link-header';
import Pagination from '@material-ui/lab/Pagination';

import SearchResult from './SearchResult';

export default class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      listOfUsers: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const { input, currentPage } = this.state;
    this.fetchUsers(input, currentPage);
  }

  handlePageChange(currentPage) {
    this.setState({ currentPage });

    const { input } = this.state;
    console.log('CURRENT PAGE', currentPage);
    this.fetchUsers(input, currentPage);
  }

  fetchUsers = async (input, currentPage) => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${input}&per_page=10&page=${currentPage}`
      );

      const data = res.data;
      const linkHeader = res.headers.link;
      const parsed = parse(linkHeader);

      this.setState({
        totalCount: data.total_count,
        listOfUsers: data.items,
        totalPages: Number(parsed.last.page) || Number(parsed.prev.page),
      });
      this.renderSearchResults();
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  renderSearchResults = () => {
    const { listOfUsers } = this.state;

    if (Object.keys(listOfUsers).length && listOfUsers.length) {
      return (
        <div className="results-container">
          {listOfUsers.map((eachUser) => {
            return <SearchResult key={eachUser.id} eachUser={eachUser} />;
          })}
        </div>
      );
    }
  };

  render() {
    const { totalCount, totalPages, currentPage } = this.state;

    return (
      <div>
        <div className="full-search">
          <form>
            <input
              id="search-bar"
              onChange={this.handleChange}
              type="text"
              placeholder="Search"
            />
            <button
              id="search-button"
              onClick={this.handleSubmit}
              type="submit"
            >
              <img
                src="https://library.kissclipart.com/20181214/khe/kissclipart-black-magnifying-glass-clipart-magnifying-glass-cl-d9dedc081ac202cb.png"
                alt="search button"
              />
            </button>
          </form>
        </div>

        <p>TOTAL RESULTS: {totalCount}</p>

        {this.renderSearchResults()}

        <Pagination
          count={totalPages}
          color="primary"
          page={currentPage}
          onChange={(currentPage) => this.handlePageChange(currentPage)}
        />
      </div>
    );
  }
}
