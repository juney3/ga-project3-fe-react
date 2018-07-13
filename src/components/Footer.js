import React, { Component } from 'react';
import { Divider, Grid, Icon } from 'semantic-ui-react';


export default class Footer extends Component {
  render() {
    return(
      <Grid centered columns={2}>
        <Grid.Column textAlign="center">
          <footer >
            <p><a href="http://marvel.com" target="new">Data provided by Marvel. © 2018 MARVEL</a></p>
            <Divider />
            <p>Made with <Icon link name='heart' /> and <Icon link name='coffee' /> in the SF Bay Area</p>
            <p>© 2018 June Yoshii</p>
          </footer >
        </Grid.Column>
      </Grid>
    )
  }
}
