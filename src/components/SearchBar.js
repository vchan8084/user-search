import React from 'react';

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('HERE');
    /* renders search results */
  }

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
