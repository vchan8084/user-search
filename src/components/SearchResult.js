import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResult extends React.Component {
  render() {
    const { eachUser } = this.props;

    return (
      <div>
        <Link
          to={{
            pathname: '/user',
            state: {
              user: eachUser.login,
            },
          }}
        >
          {eachUser.login}
        </Link>

        <img src={eachUser.avatar_url} alt="profile avatar" />
      </div>
    );
  }
}
