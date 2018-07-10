import React, { Component } from 'react';
import { Button, Card, Checkbox, Icon, Image } from 'semantic-ui-react';

export default class ListComic extends Component {
  render() {
    return (
      <Card>
        <Card.Content extra>
            <Button icon><Icon link name='pencil alternate' /></Button>
            <Button icon><Icon link name='close' /></Button>
        </Card.Content>
        <Card.Content>
          <Image floated='right' size='small' src='img.url' />
          <Card.Header>Comic name</Card.Header>
          <Card.Description>
            Issue, year
          </Card.Description>
          <Card.Description>
            Comic description
          </Card.Description>
          <Card.Description>
            User notes
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Checkbox label='Finished reading' />
        </Card.Content>
      </Card>
    )
  }
}
