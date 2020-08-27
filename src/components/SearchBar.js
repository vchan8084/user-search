import React from 'react';
/* Axios: HTTP client */
/* Decided to use axios because I've used it before with React apps and it easily fetches data from APIs. The response is automatically returned in json format which is handy. */
import axios from 'axios';

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  handleChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const user = this.state.input;
    this.renderUsers(user);
  }

  renderUsers = async (user) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${user}`);
      console.log('RES', res);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  render() {
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
              <img src="https://library.kissclipart.com/20181214/khe/kissclipart-black-magnifying-glass-clipart-magnifying-glass-cl-d9dedc081ac202cb.png" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
