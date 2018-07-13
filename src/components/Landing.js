import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';
import LandingList from './LandingList';

let newPublicLists = "Lists coming soon."

export default class Landing extends Component {

  render() {
    if(this.props.newPublicLists) {
      let newLists = this.props.newPublicLists

      newPublicLists = newLists.map((newList, index) => {
        return(
          <LandingList newList={newList} key={index} />
        )
      })
    }

    return(
      <div className="landingPage">
        <Grid centered columns={2}>
            <Grid.Column>
              <Grid.Row className="welcome">
                <Header as='h2'>Welcome to comic.ly</Header>
                <Header as='h4'>Manage your comics reading habit, powered by the mighty Marvel API!</Header>
              </Grid.Row>
              <Grid.Row className="getStarted">
                <Message info >
                  <p>To get started, sign up for an account or log in</p>
                </Message>
              </Grid.Row>
              <Grid.Row>
                <div className="latestLists">
                  <Header as='h3'>Recent Lists from the comic.ly Community</Header>
                </div>
                {newPublicLists}
              </Grid.Row>
            </Grid.Column>
        </Grid>
      </div>

    )
  }
}
