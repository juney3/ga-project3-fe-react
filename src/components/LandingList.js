import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

export default class LandingList extends Component {
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
      <Card className="oneList">
        <Card.Content>
          <Card.Header as={'h5'}>{this.props.newList.listName} by {this.props.newList.user[0].userName}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}
