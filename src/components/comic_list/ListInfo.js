import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class ListInfo extends Component {
  render() {
    let shared;
    if (this.props.selectedList.listIsPublic) {
      shared = 'is shared.'
    }
    else {
      shared = 'is private.'
    }

    return(
      <div className="listInfo">
        <Header as={'h2'}>{this.props.selectedList.listName}</Header>
        <Header as={'h4'}>{this.props.selectedList.listDescription}</Header>
        <p>This list is {shared}</p>
      </div>
    )
  }
}
