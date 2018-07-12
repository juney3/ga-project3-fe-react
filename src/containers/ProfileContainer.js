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
      userData: '',
      joinDate: '',
      numLists: '',
    }
  }

  getUser(){
    axios.get(`${ROOT_ROUTE}/users/${this.state.user}`)
    .then(response => {
      let joinDate = response.data.createdAt.slice(0,10)
      let numLists = response.data.lists.length;
      this.setState({
        userData: response.data,
        joinDate: joinDate,
        numLists: numLists
      })
    })
    .catch(err => {
      console.log("error fetching user", err)
    })
  }

  componentWillMount() {
    this.getUser();
  }

  render() {
    return(
      <div>
        <Profile
          userData={this.state.userData}
          joinDate={this.state.joinDate}
          numLists={this.state.numLists}
        />
      </div>
    )
  }
}

export default ProfileContainer;
