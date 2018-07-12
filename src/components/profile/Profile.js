import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

export default class Profile extends Component {
  render() {
    return (
      <div className="profileInfo">
        <Grid centered columns={2}>
          <Grid.Column>
              <Header as='h2'>
                Welcome, {this.props.userData.userName}!
              </Header>
              <Segment className="userInfo">
                <Header as='h4' className="userInfoHeader">
                  Here is your user information:
                </Header>
                <List
                  relaxed="very"
                  divided
                  verticalAlign="middle"
                >
                  <List.Item>
                    Name: {this.props.userData.firstName} {this.props.userData.lastName}
                  </List.Item>
                  <List.Item>
                    User name: {this.props.userData.userName}
                  </List.Item>
                  <List.Item>
                    Email address: {this.props.userData.email}
                  </List.Item>
                  <List.Item>
                    Joined Comic.ly on: {this.props.joinDate}
                  </List.Item>
                  <List.Item>
                    Number of lists: {this.props.numLists}
                  </List.Item>
                </List>
                <Button>Update user information</Button>
              </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
