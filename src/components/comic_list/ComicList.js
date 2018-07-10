import React, { Component } from 'react';
import ListComic from './ListComic';
import ListInfo from './ListInfo';
import SearchModal from '../search/SearchModal'
import { Button, Icon } from 'semantic-ui-react';

export default class ComicList extends Component {
  render() {
    return (
      <div>
        <ListInfo />
        <SearchModal
          handleInput={this.props.handleInput}
        />
        <ListComic />
      </div>
    )
  }
}
