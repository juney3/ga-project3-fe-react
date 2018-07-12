import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import CreateList from './CreateList';

export default class CreateListModal extends Component {
  handleOpen = () => this.setState({ openModal: true })

  render() {
    return(
      <Modal
        onClick={this.handleOpen}
        trigger={
          <Button>
            Create list
          </Button>
        }
      >
        <Modal.Content>
          <CreateList
            handleInput={this.props.handleInput}
            handleCheckbox={this.props.handleCheckbox}
            createList={this.props.createList}
          />
        </Modal.Content>
      </Modal>
    )
  }
}
