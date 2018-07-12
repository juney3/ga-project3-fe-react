import React, { Component } from 'react';
import Profile from '../components/profile/Profile';
import EditProfile from '../components/profile/EditProfile';
import axios from 'axios';
const ROOT_ROUTE = 'http://localhost:3010'

class ProfileContainer extends Component {
  constructor(){
    super();
    this.state={
      user: localStorage.user,
      userData: ''
    }
  }

  getUser(){
    axios.get(`${ROOT_ROUTE}/users/${this.state.user}`)
    .then(response => {
      this.setState({
        userData: response.data
      })
    })
    .catch(err => {
      console.log("error fetching user", err)
    })
  }

  render() {
    return(
      <div>
        <Profile userData={this.state.userData} />
      </div>
    )
  }
}

export default ProfileContainer;
