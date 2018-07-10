import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import Landing from '../Landing';

export default class Logout extends Component {

  componentWillMount() {
    this.props.handleLogOut();
  }
  render() {
    return(
      <div>
        <Header as='h3'>You are now logged out.</Header>
        <Link to={'/'}><Button>Back to home</Button></Link>
      </div>
    )
  }
}
