import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import ListName from './comic_list/ListName';

export default class Landing extends Component {
  render() {
    return(
      <Grid centered columns={2}>
        <div className="landingPage">
          <Grid.Column>
            <Grid.Row className="welcome">
              <Header as='h2'>Welcome to Comic.ly!</Header>
              <p>Manage your comics reading habit, powered by the mighty Marvel API!</p>
            </Grid.Row>
            <Grid.Row>
              <div className="latestLists">
                <Header as='h3'>Recent Lists</Header>
                < ListName />
                < ListName />
              </div>
            </Grid.Row>
          </Grid.Column>
        </div>
      </Grid>
    )
  }
}
