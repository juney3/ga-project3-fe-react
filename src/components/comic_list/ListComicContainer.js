import React, { Component } from 'react';
import ListComic from './ListComic';

let comics = [
  {title: 'Spider-Man',
  issue: 70,
  year: 1990,
  description: 'Craziness abounds! Will Spidey survive?'},
  {title: 'Spider-Man and Iron Man',
  issue: 85,
  year: 1990,
  description: 'Spiron Man is real.'},
]
export default class ListComicContainer extends Component {

  constructor() {
    super();
    this.state={

    }
  }



  render() {
      let listComics = comics.map((comic, index) => {
        console.log(comic.title)
        return (
          <ListComic comic={comic} key={index} />
        )
      })

    return(
      <div className="listComics">
        {listComics}
      </div>

    )
  }
}
