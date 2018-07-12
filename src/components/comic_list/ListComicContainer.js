import React, { Component } from 'react';
import ListComic from './ListComic';

let listComics;

export default class ListComicContainer extends Component {

  componentDidMount() {
    console.log(this.props.selectedList)
  }
  render() {
    return(
      <div className="listComics">
        <p>Comics go here.</p>
      </div>

    )
  }
}
