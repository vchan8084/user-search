import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

export default class SearchResult extends React.Component {
  render() {
    const { eachUser } = this.props;

    return (
      <div>
        <img
          src={eachUser.avatar_url}
          alt="profile avatar"
          height="45"
          width="55"
        />

        <Link
          to={{
            pathname: '/user',
            state: {
              user: eachUser.login,
            },
          }}
          className="name-text"
        >
          {eachUser.login}
        </Link>
      </div>
    );
  }
}
