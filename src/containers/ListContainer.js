import React, { Component } from 'react';
import EditList from '../components/comic_list/EditList';
import ComicList from '../components/comic_list/ComicList';
import MyLists from '../components/comic_list/MyLists';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

export default class ListContainer extends Component {
  constructor() {
    super()
    this.state={
      user: localStorage.user,
      lists: [],
      selectedList: [],
      searchResults: [],
      listName: '',
      listDescription: '',
      listIsPublic: false,
      comicMarvelId: '',
      comicTitle: '',
      comicIssueNumber: '',
      comicDescription: '',
      comicPageCount: '',
      comicResourceUrl: '',
      comicCoverImageUrl: '',
      comicOnSaleDate: '',
      comicIsRead: false,
      selectedComic: [],
      openModal: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onSelectList = this.onSelectList.bind(this);
    this.createList = this.createList.bind(this);
    this.onAddToList = this.onAddToList.bind(this);
  }

  // Functions for tracking state changes in input fields and checkbox
  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheckbox(event, result) {
    console.log("here is the result", result)
    if (result.checked === true) {
      this.setState({ listIsPublic: true })
    }
    else {
      this.setState({ listIsPublic: false })
    }
  }

  // Function to get user lists
  getUserLists() {
    let userId = localStorage.user
    axios.get(`http://localhost:3010/lists/user/${userId}`)
    .then(response => {
      this.setState({ lists: response.data })
    })
    .catch(error => console.log('Error retrieving lists', error))
  }

  // Function to create a comic reading list
  createList() {
    axios.post('http://localhost:3010/lists', {
      listName: this.state.listName,
      listDescription: this.state.listDescription,
      listIsPublic: this.state.listIsPublic,
      user: localStorage.user
    })
    .then(response => {
      let tempList = this.state.lists;
      tempList.push(response.data)
      this.setState({
        lists: tempList,
        openModal: false
      })
    })
    .catch(error => console.log('Error creating reading list', error))
  }

  // Function to set state to a selected list for display
  onSelectList(list) {
    this.setState({
      selectedList: list
    })
  }

  // Function for sending axios call to back end search function
  handleSearch (event) {
    event.preventDefault();
    axios.post('http://localhost:3010/search', {
      characterName: this.state.characterName,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    })
      .then(response => {
        this.setState({
          searchResults: response.data
        });
        console.log('I set the results in state', this.state.searchResults)
      })
      .catch(error => console.log('This is a search error', error))
  }

  // Function to add a comic from the search results to the reading list
  onAddToList(comic) {
    console.log("Add to list was clicked!")
    console.log("on add to list has a comic", comic);
  }

// Lifecycle methods
  componentWillMount() {
    this.getUserLists();
  }

  render() {
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <MyLists
                handleInput={this.handleInput}
                handleCheckbox={this.handleCheckbox}
                createList={this.createList}
                onSelectList={this.onSelectList}
                lists={this.state.lists}
                selectedList={this.state.selectedList}
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <ComicList
                handleInput={this.handleInput}
                handleSearch={this.handleSearch}
                selectedList={this.state.selectedList}
                searchResults={this.state.searchResults}
                selectedComic={this.state.selectedComic}
                onAddToList={this.onAddToList}
              />
            </Grid.Column >
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
