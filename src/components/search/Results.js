import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header } from 'semantic-ui-react';
import ResultsList from './ResultsList';
import SearchModal from './SearchModal';

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
