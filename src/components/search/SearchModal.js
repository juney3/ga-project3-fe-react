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
            <Icon link name='plus'/>
          </Button>
        }
      >
        <Modal.Content>
          <Search handleInput={this.props.handleInput}
          handleSearch={this.props.handleSearch}/>
        </Modal.Content>
      </Modal>
    )
  }
}
