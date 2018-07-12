import React, { Component } from 'react';
import { Button, Card, Checkbox, Icon, Image } from 'semantic-ui-react';

export default class ListComic extends Component {
  render() {

    return (
      <Card fluid>
        <Card.Content extra>
            <Button icon><Icon link name='edit' /></Button>
            <Button icon><Icon link name='close' /></Button>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <a href={this.props.comic.comicResourceUrl} target='new'>
              <Card.Header as='h2'>
                {this.props.comic.comicTitle}
              </Card.Header>
            </a>
          </Card.Description>
          <Card.Description>
            <Image floated='right' size='small' src={this.props.comic.comicCoverImageUrl} />
            <Card.Header as='h5'>
              Issue #: {this.props.comic.comicIssueNumber}
            </Card.Header>
            <Card.Header as='h5'>
              Sale date: {this.props.comic.comicOnSaleDate}
            </Card.Header>
            <Card.Header as='h5'>
              Page count: {this.props.comic.comicPageCount}
            </Card.Header>
            <Card.Header as='h5'>
              Print price: ${this.props.comic.comicPrintPrice}
            </Card.Header>
          </Card.Description>
          <Card.Description>
            {this.props.comic.comicDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Checkbox label='Finished reading' />
        </Card.Content>
      </Card>
    )
  }
}
