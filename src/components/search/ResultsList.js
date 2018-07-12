import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ResultComic from './ResultComic';

class ResultsList extends Component {
  render() {
    let resultComics = this.props.searchResults.map((result, index) => {
      return(
        <ResultComic
          result={result}
          key={index}
          selectedComic={this.props.selectedComic}
          onAddToList={this.props.onAddToList}
        />
      )
    })
    return(
      <div className="resultsList">
        <Grid centered columns={2}>
          <Grid.Column>
            {resultComics}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ResultsList;
