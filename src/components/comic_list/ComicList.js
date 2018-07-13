import React, { Component } from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import ListInfo from './ListInfo';
import ListComicContainer from './ListComicContainer';
import SearchModal from '../search/SearchModal'

export default class ComicList extends Component {

  render() {
    return (
      <Segment>
        <Grid centered columns={1}>
          <Grid.Column>
            <div>
                <ListInfo
                  selectedList={this.props.selectedList}
                  className="listInfo"
                />
                <SearchModal
                  className="searchModal"
                  handleInput={this.props.handleInput}
                  handleSearch={this.props.handleSearch}
                  selectedList={this.props.selectedList}
                  searchResults={this.props.searchResults}
                  selectedComic={this.props.selectedComic}
                  onAddToList={this.props.onAddToList}
                />
                <div className="spacer">
                </div>
                  <Container centered="true">
                    <ListComicContainer
                      className="listComicContainer"
                      handleInput={this.props.handleInput}
                      selectedList={this.props.selectedList}
                    />
                  </Container>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
