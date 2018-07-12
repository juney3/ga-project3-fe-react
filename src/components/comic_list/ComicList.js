import React, { Component } from 'react';
import ListInfo from './ListInfo';
import ListComicContainer from './ListComicContainer';
import SearchModal from '../search/SearchModal'

export default class ComicList extends Component {

  render() {
    return (
      <div>
        <ListInfo
          selectedList={this.props.selectedList}
          className="listInfo"
        />
        <SearchModal
          handleInput={this.props.handleInput}
          handleSearch={this.props.handleSearch}
          selectedList={this.props.selectedList}
          searchResults={this.props.searchResults}
          selectedComic={this.props.selectedComic}
          onAddToList={this.props.onAddToList}
        />
        <ListComicContainer
          handleInput={this.props.handleInput}
          selectedList={this.props.selectedList}
        />
      </div>
    )
  }
}
