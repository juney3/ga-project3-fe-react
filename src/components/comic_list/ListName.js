import React, { Component } from 'react';
import { Card, Header, Image } from 'semantic-ui-react';

export default class ListName extends Component {
  constructor() {
    super();
    this.selectList = this.selectList.bind(this);
  }

  // Function to select one list.
  selectList() {
    this.props.onSelectList(this.props.oneList)
  }

  render() {
    return (
      <Card className="oneList" onClick={this.selectList}>
        <Card.Content>
          <Card.Header as={'h5'}>{this.props.oneList.listName}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}
