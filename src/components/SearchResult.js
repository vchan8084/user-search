import React from 'react';
/* Axios: HTTP client */
/* Decided to use axios because I've used it before with React apps and it easily fetches data from APIs. The response is automatically returned in json format which is handy. */
import axios from 'axios';

export default class SearchResult extends React.Component {
  render() {
    const { eachUser } = this.props;
    console.log('EACH USER', eachUser);

    return (
      <div>
        <h1>Name: {eachUser.login}</h1>
        <img src={eachUser.avatar_url} alt="profile avatar" />
      </div>
    );
  }
}
