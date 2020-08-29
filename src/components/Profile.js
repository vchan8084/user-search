import React from 'react';
import axios from 'axios';
import './Profile.css';

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
        <img src={userData.avatar_url} alt="avatar" height="300" width="300" />
        <p id="profile-text">Name: {userData.name}</p>
        <p id="profile-text">
          About: {userData.bio || 'No information available'}
        </p>
        <p id="profile-text">Followers: {userData.followers}</p>
        <p id="profile-text">Following: {userData.following}</p>
        <a href={userData.html_url}>GitHub Page</a>
      </div>
    );
  }
}
