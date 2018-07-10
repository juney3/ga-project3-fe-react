import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';


export default class Footer extends Component {
  render() {
    return(
      <Grid centered columns={2}>
        <Grid.Column textAlign="center">
          <footer >
            <a href="http://marvel.com" target="new">Data provided by Marvel. © 2018 MARVEL</a>
            <p>Made with <Icon link name='heart' /> and <Icon link name='coffee' /> in the SF Bay Area</p>
          </footer >
        </Grid.Column>
      </Grid>
    )
  }
}
