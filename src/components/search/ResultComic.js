import React, { Component } from 'react';
import { Button, Card, Form, Header, Image } from 'semantic-ui-react';

export default class ResultComic extends Component {
  render() {
    let comicUrl=this.props.result.urls[0].url
    let date = this.props.result.dates[0].date.substring(0,10)
    let printPrice = this.props.result.prices[0].price
    let imgUrl=`${this.props.result.thumbnail.path}/portrait_xlarge.${this.props.result.thumbnail.extension}`
    return(
      <Card fluid>
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
            <Card.Header as='h5'>
              Issue #: {this.props.result.issueNumber}
            </Card.Header>
            <Card.Header as='h5'>
              Sale date: {date}
            </Card.Header>
            <Card.Header as='h5'>
              Page count: {this.props.result.pageCount}
            </Card.Header>
            <Card.Header as='h5'>
              Print price: {printPrice}
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
