import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Input, Message, Segment } from 'semantic-ui-react';

class SignUp extends Component {

  render(){
    return(
      <div className='signUp'>
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Form>
              <Header as='h3'>Sign Up</Header>
              <Form.Field>
                <label>First name</label>
                <Input
                  name="firstName"
                  onChange={this.props.handleInput}
                  placeholder="Enter your first name" />
              </Form.Field>
              <Form.Field>
                <label>Last name</label>
                <Input
                  name="lastName"
                  onChange={this.props.handleInput}
                  placeholder="Enter your last name" />
              </Form.Field>
              <Form.Field>
                <label>User name</label>
                <Input
                  name="userName"
                  onChange={this.props.handleInput}
                  placeholder="Enter a user name" />
              </Form.Field>
              <Form.Field>
                <label>Email address</label>
                <Input
                  name="email"
                  onChange={this.props.handleInput}
                  placeholder="Enter your email address" />
                <Message
                  error
                  header='Email in use'
                  content='This email is already in use.'
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Input
                  name="password"
                  type="password"
                  onChange={this.props.handleInput}
                  placeholder="Enter a password" />
                <Message
                  error
                  header='Password error'
                  content='Passwords must match'
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm password</label>
                <Input
                  name="confirmPassword"
                  type="password"
                  onChange={this.props.handleInput}
                  placeholder="Confirm your password" />
                <Message
                  error
                  header='Password error'
                  content={'Passwords must match'}
                />
              </Form.Field>
              <Button
                type='submit'
                onClick={this.props.handleSignUp}>
                  Create account
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    )
  }

}

const validate = values => {
  const errors = {}

  if (values.password !== values.confirmPassword) {
    errors.password = 'Passwords must match'
  }

  if (!values.email) {
    errors.email = 'Please enter an email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (!values.confirmPassword) {
    errors.passwordConfirmation = 'Please confirm your password'
  }

  return errors
}

export default SignUp;
