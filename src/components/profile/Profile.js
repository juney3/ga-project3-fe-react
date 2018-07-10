import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';

export default class Profile extends Component {
  render() {
    return (
      <div className="profileInfo">
        <Header as='h2'>Welcome, userName!</Header>
        <Header as='h5'>Here is your user information:</Header>
        <p>Name: firstName lastName</p>
        <p>User name: userName</p>
        <p>Email address: email</p>
        <p>Joined Comic.ly on: joinDate</p>
        <p>Number of lists: user.lists.length</p>
        <Button>Update user information</Button>
      </div>
    )
  }
}
