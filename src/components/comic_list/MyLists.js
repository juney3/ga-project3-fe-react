import React, { Component } from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import CreateListModal from './CreateListModal';
import ListName from './ListName';


export default class MyLists extends Component {
  render() {
    return(
      <div>
        <Header as='h2'>My Lists</Header>
        <CreateListModal />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
      </div>
    )
  }
}
