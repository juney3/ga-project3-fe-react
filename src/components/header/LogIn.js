import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Input, Segment } from 'semantic-ui-react';

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state= {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    }
    else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  render() {
    return(
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment>
              <Form>
                <Header as='h3'>Login</Header>
                <Form.Field>
                  <label>Email</label>
                  <Input
                    name="email"
                    placeholder="Enter your email address" onChange={this.props.handleInput}/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password" onChange={this.props.handleInput}/>
                </Form.Field>
                <Button
                  type='submit' onClick={this.props.handleLogIn}>
                    Log in
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
        {localStorage.token === true && <Redirect to={'/lists'}/>
        }
      </div>
    )
  }

}
