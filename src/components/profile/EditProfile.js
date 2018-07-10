import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Input } from 'semantic-ui-react';

export default class EditProfile extends Component {
  render(){
    return(
      <Form>
        <Header as='h4'>Edit user information</Header>
        <Form.Field>
          <label>First name</label>
          <Input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <Input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label>User name</label>
          <Input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label>Email address</label>
          <Input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label>Confirm password</label>
          <Input placeholder="" />
        </Form.Field>
        <Button type='submit'>Update</Button>
      </Form>
    )
  }

}
