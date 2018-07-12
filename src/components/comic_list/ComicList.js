import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import ListInfo from './ListInfo';
import ListComicContainer from './ListComicContainer';
import SearchModal from '../search/SearchModal'

export default class ComicList extends Component {

  render() {
    return (
      <Segment>
        <Grid centered>
          <Grid.Column>
            <div>
              <Grid.Row>
                <ListInfo
                  selectedList={this.props.selectedList}
                  className="listInfo"
                />
              </Grid.Row>
              <Grid.Row>
                <SearchModal
                  className="searchModal"
                  handleInput={this.props.handleInput}
                  handleSearch={this.props.handleSearch}
                  selectedList={this.props.selectedList}
                  searchResults={this.props.searchResults}
                  selectedComic={this.props.selectedComic}
                  onAddToList={this.props.onAddToList}
                />
              </Grid.Row>
              <Grid.Row>
                <ListComicContainer
                  className="listComicContainer"
                  handleInput={this.props.handleInput}
                  selectedList={this.props.selectedList}
                />
              </Grid.Row>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
