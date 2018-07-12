import React, { Component } from 'react';
import ListComic from './ListComic';
import ListInfo from './ListInfo';
import ListComicContainer from './ListComicContainer';
import SearchModal from '../search/SearchModal'
import { Button, Icon } from 'semantic-ui-react';

export default class ComicList extends Component {

  render() {
    return (
      <div>
        <ListInfo
          selectedList={this.props.selectedList}
        />
        <SearchModal
          handleInput={this.props.handleInput}
          handleSearch={this.props.handleSearch}
          selectedList={this.props.selectedList}
          searchResults={this.props.searchResults}
        />
        <ListComicContainer
          handleInput={this.props.handleInput}
          selectedList={this.props.selectedList}
        />
      </div>
    )
  }
}
