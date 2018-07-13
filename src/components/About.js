import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';

export default class About extends Component {

  render() {
    return(
      <div className="about">
        <Grid centered columns={2}>
            <Grid.Column>
              <Segment>
                <Header as='h2'>About</Header>
                <p>A web developer based in the SF Bay Area, I created comic.ly while attending the Web Development Immersive program at General Assembly SF.</p>
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
