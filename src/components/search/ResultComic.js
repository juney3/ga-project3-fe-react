import React, { Component } from 'react';
import { Button, Card, Form, Header, Image, Table } from 'semantic-ui-react';

export default class ResultComic extends Component {
  render() {
    let comicUrl=this.props.result.urls[0].url
    let date = this.props.result.dates[0].date
    let imgUrl=`${this.props.result.thumbnail.path}/portrait_xlarge.${this.props.result.thumbnail.extension}`
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='small' src={imgUrl} />
          <a href={comicUrl} target='new'>
            <Card.Header as='h4'>
              {this.props.result.title}
            </Card.Header>
          </a>
          <Card.Description>
            <Table basic='very' celled collapsing>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Issue #
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {this.props.result.issueNumber}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Sale date
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {date}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h5'>
                      <Header.Content>
                        Description
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {this.props.result.description}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
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
