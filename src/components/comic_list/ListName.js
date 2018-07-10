import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class List extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated='left' size='small' src='img.url' />
          <Card.Header>List name</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}
