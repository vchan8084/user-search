import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    const { user } = this.props.location.state;

    try {
      const res = await axios.get(`https://api.github.com/users/${user}`);
      this.setState({
        userData: res.data,
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  render() {
    const { userData } = this.state;

    return (
      <div>
        <img src={userData.avatar_url} alt="avatar" />
        <p>Name: {userData.name}</p>
        <p>About: {userData.bio || 'No information available'}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <a href={userData.html_url}>GitHub Page</a>
      </div>
    );
  }
}
