import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    let headerItems = [
        <Link to={'/'} key={1} >
          <Menu.Item header>comic.ly</Menu.Item>
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

    headerItems.push(
        <Menu.Menu position='right' key={7}>
        <Link to={ '/about' } >
          <Menu.Item>
            About
          </Menu.Item>
        </Link>
      </Menu.Menu>
    )

    return(
        <Menu fixed='top' borderless size='massive'>
          {headerItems}
        </Menu>
    )
  }
}
