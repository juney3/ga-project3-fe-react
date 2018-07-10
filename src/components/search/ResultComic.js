import React, { Component } from 'react';
import { Button, Card, Form, Image } from 'semantic-ui-react';

export default class ResultComic extends Component {
  render() {
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='small' src='img.url' />
          <Card.Header>Comic name</Card.Header>
          <Card.Description>
            Issue, year
          </Card.Description>
          <Card.Description>
            Comic description
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Form>
            <Button type='submit'>Add to list</Button>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}
