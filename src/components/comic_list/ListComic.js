import React, { Component } from 'react';
import { Button, Card, Checkbox, Icon, Image } from 'semantic-ui-react';

export default class ListComic extends Component {
  render() {
    console.log(this.props.comic.year)
    return (
      <Card>
        <Card.Content extra>
            <Button icon><Icon link name='edit' /></Button>
            <Button icon><Icon link name='close' /></Button>
        </Card.Content>
        <Card.Content>
          <Image floated='right' size='small' src='img.url' />
          <Card.Header>{this.props.comic.title}</Card.Header>
          <Card.Description>
            <p>Issue #{this.props.comic.issue} - Year: {this.props.comic.year} </p>
          </Card.Description>
          <Card.Description>
            <p>Description: {this.props.comic.description}</p>
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
