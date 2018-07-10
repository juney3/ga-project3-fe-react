import React, { Component } from 'react';

export default class ListInfo extends Component {
  render() {
    return(
      <div className="listInfo">
        <h3>listName</h3>
        <p>listDescription</p>
        <p>This list is shared/not shared</p>
      </div>
    )
  }
}
