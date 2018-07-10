import React, { Component } from 'react';
import ResultComic from './ResultComic';

class ResultsList extends Component {
  render() {
    return(
      <div className="resultsList">
        <ResultComic />
        <ResultComic />
        <ResultComic />
      </div>
    )
  }
}

export default ResultsList;
