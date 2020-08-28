import React from 'react';
/* Axios: HTTP client */
/* Decided to use axios because I've used it before with React apps and it easily fetches data from APIs. The response is automatically returned in json format which is handy. */
import axios from 'axios';

const SearchResults = () => {
  return (
    <div>
      <p>SEARCH RESULTS</p>
    </div>
  );
};

export class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      showSearchResults: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderUsers = this.renderUsers.bind(this);
  }

  handleChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const users = this.state.input;
    console.log('USERS', users);
    this.renderUsers(users);
  }

  // list of users: https://api.github.com/search/users?q=tom
  // specific user info: https://api.github.com/users/${user}
  renderUsers = async (users) => {
    this.setState({ showSearchResults: true });
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${users}`
      );
      console.log('RES', res);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  render() {
    const { showSearchResults } = this.state;

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

        {showSearchResults ? <SearchResults /> : null}
      </div>
    );
  }
}
