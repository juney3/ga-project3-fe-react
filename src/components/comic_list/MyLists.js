import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import CreateListModal from './CreateListModal';
import ListName from './ListName';

let listNames = ''

export default class MyLists extends Component {
  render() {
    if (this.props.lists) {
      listNames = this.props.lists.map((oneList, index) => {
        return(
          <ListName
            oneList={oneList}
            key={index}
            onSelectList={this.props.onSelectList}
            selectedList={this.props.selectedList}
          />
        )
      })
    }
    return(
      <div>
        <Header as='h2'>My Lists</Header>
          <CreateListModal
            handleInput={this.props.handleInput}
            handleCheckbox={this.props.handleCheckbox}
            createList={this.props.createList}
            lists={this.props.lists}
          />
          <div className="spacer">
          </div>
        {listNames}
      </div>
    )
  }
}
