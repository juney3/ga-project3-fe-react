import React, { Component } from 'react';
import { Button, Checkbox, Form, Header, Input } from 'semantic-ui-react';

export default class EditList extends Component {
  render() {
    return(
      <Form>
        <Header as='h4'>Edit reading list details</Header>
        <Form.Field>
          <label>List name</label>
          <Input placeholder="listName" />
        </Form.Field>
        <Form.Field
          id='form-textarea-control-description'
          control={ Input }
          label="Description"
          placeholder="description"
        />
        <Form.Field>
          <Checkbox label='Share this form'/>
        </Form.Field>
        <Button type='submit'>Update</Button>
      </Form>
    )
  }
}
