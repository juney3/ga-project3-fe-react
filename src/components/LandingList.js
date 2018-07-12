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
    console.log('OMG I selected a listName!', this.props.oneList)
  }

  render() {
    return (
      <Card className="oneList">
        <Card.Content>
          <Card.Header as={'h5'}>ListName</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}
