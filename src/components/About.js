import React, { Component } from 'react';
import { Card, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';

export default class About extends Component {

  render() {
    return(
      <div className="about">
        <Grid centered columns={3}>
            <Grid.Column>
              <Segment className="bio">
                <Header as='h2'>{"Hi, I'm June"}</Header>
                    <p>A web developer based in the SF Bay Area, I created comic.ly while attending the Web Development Immersive program at <a href='https://generalassemb.ly/locations/san-francisco' target='new'>General Assembly SF</a>.</p>
                    <Divider />
                    <Segment>
                      <a href="https://github.com/juney3" target="new">
                        <Icon link name="github" floated='left' size="large"/> Visit me on Github
                      </a>
                    </Segment>
              </Segment>
            </Grid.Column>
        </Grid>
      </div>

    )
  }
}
