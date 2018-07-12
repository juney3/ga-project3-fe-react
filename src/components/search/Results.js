import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ResultsList from './ResultsList';

export default class Results extends Component {
  render() {
    return(
      <div className="results">
        <Grid centered columns={1}>
          <Grid.Column>
              < ResultsList
                searchResults={this.props.searchResults}
                selectedComic={this.props.selectedComic}
                onAddToList={this.props.onAddToList}
              />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
