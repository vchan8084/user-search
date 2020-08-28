import React from 'react';
/* Axios: HTTP client */
/* Decided to use axios because I've used it before with React apps and it easily fetches data from APIs. The response is automatically returned in json format which is handy. */
import axios from 'axios';
import SearchResult from './SearchResult';

export default class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      listOfUsers: [],
      totalCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const users = this.state.input;
    this.fetchUsers(users);
  }

  // list of users: https://api.github.com/search/users?q=tom
  // specific user info: https://api.github.com/users/${user}
  fetchUsers = async (users) => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${users}`
      );
      const data = res.data;
      this.setState({ totalCount: data.total_count, listOfUsers: data.items });
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
    const { totalCount } = this.state;
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

        {/*	Result*/}
        {this.renderSearchResults()}
      </div>
    );
  }
}
