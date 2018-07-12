import React, { Component } from 'react';
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
        {listComics}
      </div>
    )
  }
}
