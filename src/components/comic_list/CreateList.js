import React, { Component } from 'react';
import { Button, Checkbox, Form, Header, Input, TextArea } from 'semantic-ui-react';

export default class CreateList extends Component {
  render() {
    console.log(this.props.listName)
    return(
      <Form>
        <Header as='h2'>Create a reading list</Header>
        <Form.Field>
          <label>List name</label>
          <Input
            name="listName"
            placeholder="Enter a name for this list"
            onChange={this.props.handleInput} />
        </Form.Field>
        <Form.Field
          id='form-textarea-control-description'
          control={ TextArea }
          label="Description"
          name="listDescription"
          onChange={this.props.handleInput}
          placeholder="Describe this list"
        />
        <Form.Field>
          <Checkbox
            label='Share this list'
            onChange={this.props.handleCheckbox}
            name='listIsPublic'
            value='true'
          />
        </Form.Field>
        <Button
          type='submit'
          onClick={this.props.createList}
        >
            Create
        </Button>
      </Form>
    )
  }
}
