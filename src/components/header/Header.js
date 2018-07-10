import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Header extends Component {
  componentDidMount() {
    console.log("I am the header and here is the user id", localStorage.user)
  }
  render() {

    let headerItems = [
      <Link to={'/'} key={1}>
        <Menu.Item header>Comic.ly</Menu.Item>
      </Link>
    ]

    if (this.props.isLoggedIn) {
      headerItems.push(
        <Link to={ '/lists' } key={2}>
          <Menu.Item
            user={this.props.user}>
              My lists
          </Menu.Item>
        </Link>);
      headerItems.push(
        <Link to={ '/profile' } key={3}>
          <Menu.Item
            user={this.props.user}>
              My profile
          </Menu.Item>
        </Link>
      )
      headerItems.push(
        <Link to={ '/logout' } key={4}>
          <Menu.Item> Log out </Menu.Item>
        </Link>
      )
    }

    if (!this.props.isLoggedIn) {
      headerItems.push(
        <Link to={ '/signup' } key={5}>
          <Menu.Item> Sign up </Menu.Item>
        </Link>
      )
      headerItems.push(
        <Link to={ '/login' } key={6}>
          <Menu.Item> Log in </Menu.Item>
        </Link>
      )
    }

    headerItems.push(<Menu.Menu position='right' key={7}>
      <Menu.Item>
        About
      </Menu.Item>
    </Menu.Menu>)
    
    return(
      <div className="header">
        <Menu borderless>
          {headerItems}
        </Menu>
      </div>
    )
  }
}
