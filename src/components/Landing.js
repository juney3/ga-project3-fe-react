import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import LandingList from './LandingList';

export default class Landing extends Component {
  render() {
    return(
      <div className="landingPage">
        <Grid centered columns={2}>
            <Grid.Column>
              <Grid.Row className="welcome">
                <Header as='h2'>Welcome to Comic.ly!</Header>
                <p>Manage your comics reading habit, powered by the mighty Marvel API!</p>
              </Grid.Row>
              <Grid.Row>
                <div className="latestLists">
                  <Header as='h3'>Recent Lists</Header>
                  < LandingList />
                  < LandingList />
                </div>
              </Grid.Row>
            </Grid.Column>
        </Grid>
      </div>

    )
  }
}
