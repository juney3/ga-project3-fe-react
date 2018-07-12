import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import Search from './Search';

export default class SearchModal extends Component {
  render() {
    return(
      <Modal
        closeIcon onClose={this.closeModal}
        trigger={
          <Button>
            Add comic
          </Button>
        }
      >
        <Modal.Content>
          <Search
            handleInput={this.props.handleInput}
            handleSearch={this.props.handleSearch}
            selectedList={this.props.selectedList}
            searchResults={this.props.searchResults}
            selectedComic={this.props.selectedComic}
            onAddToList={this.props.onAddToList}
          />
        </Modal.Content>
      </Modal>
    )
  }
}
