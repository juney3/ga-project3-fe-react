import React, { Component } from 'react';
import ListName from './ListName';
import { Button, Header, Icon } from 'semantic-ui-react';

export default class MyLists extends Component {
  render() {
    return(
      <div>
        <Header as='h2'>My Lists</Header>
        <Button icon><Icon link name='plus' /></Button>
        <ListName />
        <ListName />
        <ListName />
        <ListName />
      </div>
    )
  }
}
