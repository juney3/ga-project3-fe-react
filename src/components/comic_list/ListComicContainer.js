import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import ListComic from './ListComic';

export default class ListComicContainer extends Component {

  render() {
    let listComics = this.props.selectedList.comics.map((comic, index) => {
      return(
        <ListComic comic={comic} key={index} />
      )
    })
    return (
      <div>
        <Header as='h3'>Comics: </Header>
        {listComics}
      </div>
    )
  }
}
