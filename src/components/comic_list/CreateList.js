import React, { Component } from 'react';
import { Button, Checkbox, Form, Header, Input, TextArea } from 'semantic-ui-react';

export default class CreateList extends Component {
  render() {
    return(
      <Form>
        <Header as='h2'>Create a reading list</Header>
        <Form.Field>
          <label>List name</label>
          <Input
            name="name"
            placeholder="Enter a name for this list" />
        </Form.Field>
        <Form.Field
          id='form-textarea-control-description'
          control={ TextArea }
          label="Description"
          name="description"
          placeholder="Describe this list"
        />
        <Form.Field>
          <Checkbox
            label='Share this list'
            name="isPublic"
          />
        </Form.Field>
        <Button type='submit'>Create</Button>
      </Form>
    )
  }
}
