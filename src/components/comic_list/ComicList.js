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
        <ListInfo />
        <SearchModal
          handleInput={this.props.handleInput}
          handleSearch={this.props.handleSearch}
          selectedList={this.props.selectedList}
          searchResults={this.props.searchResults}
          comicMarvelId={this.state.comicMarvelId}
          comicTitle={this.state.comicTitle}
          comicIssueNumber={this.state.comicIssueNumber}
          comicDescription={this.state.comicDescription},
          comicPageCount={this.state.comicPageCount},
          comicResourceUrl={this.state.comicResourceUrl},
          comicCoverImageUrl={this.state.comicCoverImageUrl},
          comicOnSaleDate={this.comicOnSaleDate}
        />
        <ListComicContainer
          handleInput={this.props.handleInput}
          selectedList={this.props.selectedList}
          comicMarvelId={this.state.comicMarvelId}
          comicTitle={this.state.comicTitle}
          comicIssueNumber={this.state.comicIssueNumber}
          comicDescription={this.state.comicDescription},
          comicPageCount={this.state.comicPageCount},
          comicResourceUrl={this.state.comicResourceUrl},
          comicCoverImageUrl={this.state.comicCoverImageUrl},
          comicOnSaleDate={this.comicOnSaleDate}
        />
      </div>
    )
  }
}
