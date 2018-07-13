import React, { Component } from 'react';
import { Header, Icon, Message } from 'semantic-ui-react';

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
        <Message>
          <Header as={'h2'} textAlign='center' >
            {this.props.selectedList.listName}
          </Header>
          <Header as={'h4'}>
            {this.props.selectedList.listDescription}
          </Header>
            <p>
              <Icon link name="list"/>This list is {shared}
            </p>
        </Message>
      </div>
    )
  }
}
