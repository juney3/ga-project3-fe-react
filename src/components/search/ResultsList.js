import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ResultComic from './ResultComic';

class ResultsList extends Component {
  render() {
    return(
      <div className="resultsList">
        <Grid centered columns={2}>
          <Grid.Column>
            <ResultComic />
            <ResultComic />
            <ResultComic />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ResultsList;
