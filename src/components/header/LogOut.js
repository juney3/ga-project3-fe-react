import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import Landing from '../Landing';

export default class Logout extends Component {

  componentWillMount() {
    this.props.handleLogOut();
  }
  render() {
    return <Redirect to='/' />
  }
}
