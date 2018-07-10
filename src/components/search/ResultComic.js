import React, { Component } from 'react';
import { Button, Card, Form, Grid, Header, Image, List } from 'semantic-ui-react';

export default class ResultComic extends Component {
  render() {
    let comicUrl=this.props.result.urls[0].url
    let date = this.props.result.dates[0].date.substring(0,9)
    let imgUrl=`${this.props.result.thumbnail.path}/portrait_xlarge.${this.props.result.thumbnail.extension}`
    return(
      <Card>
        <Card.Content>
          <Card.Description>
          <a href={comicUrl} target='new'>
            <Card.Header as='h2'>
              {this.props.result.title}
            </Card.Header>
          </a>
          </Card.Description>
          <Card.Description>
            <Image floated='right' size='small' src={imgUrl} />
            <Card.Header as='h3'>
              Issue #: {this.props.result.issueNumber}
            </Card.Header>
            <Card.Header as='h3'>
              Sale date: {date}
            </Card.Header>
          </Card.Description>
          <Card.Description>
            {this.props.result.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button type='submit'>
            Add to list
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
