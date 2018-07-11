import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import CreateList from './CreateList';

export default class CreateListModal extends Component {
  render() {
    return(
      <Modal
        closeIcon onClose={this.closeModal}
        trigger={
          <Button>
            Create list
          </Button>
        }
      >
        <Modal.Content>
          <CreateList
            handleInput={this.props.handleInput}
            handleSearch={this.props.handleSearch}
          />
        </Modal.Content>
      </Modal>
    )
  }
}
