import React, { Component } from 'react';
import { Button, Checkbox, Form, Header, Input, TextArea } from 'semantic-ui-react';

export default class CreateList extends Component {
  render() {
    return(
      <Form>
        <Header as='h4'>Create a reading list</Header>
        <Form.Field>
          <label>List name</label>
          <Input
            name="listName"
            placeholder="listName" />
        </Form.Field>
        <Form.Field
          id='form-textarea-control-description'
          control={ TextArea }
          label="Description"
          placeholder="Describe your reading list"
        />
        <Form.Field>
          <Checkbox label='Share this form'/>
        </Form.Field>
        <Button type='submit'>Update</Button>
      </Form>
    )
  }
}
