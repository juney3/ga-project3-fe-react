import React, { Component } from 'react';
import Profile from '../components/profile/Profile';
import EditProfile from '../components/profile/EditProfile';

class ProfileContainer extends Component {
  render() {
    return(
      <div>
        <Profile />
        <EditProfile />
      </div>
    )
  }
}

export default ProfileContainer;
