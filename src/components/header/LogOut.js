import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {

  componentWillMount() {
    this.props.handleLogOut();
  }
  render() {
    return <Redirect to='/' />
  }
}
