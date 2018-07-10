import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import ResultsList from './ResultsList';
import SearchModal from './SearchModal';

export default class Results extends Component {
  render() {
    return(
      <div className="results">
        <Header as='h2'>Search Results</Header>
        < ResultsList />
        <SearchModal
          handleInput={this.props.handleInput}
        />
      </div>
    )
  }
}
