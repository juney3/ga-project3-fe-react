import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import Search from './Search';

export default class SearchModal extends Component {
  render() {
    return(
      <Modal trigger={
        <Button>
          <Icon link name='plus'/>
        </Button>}
      >
        <Modal.Content>
          <Search handleInput={this.props.handleInput}/>
        </Modal.Content>
      </Modal>
    )
  }
}
