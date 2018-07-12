import React, { Component } from 'react';
import ComicList from '../components/comic_list/ComicList';
import MyLists from '../components/comic_list/MyLists';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
const ROOT_ROUTE = 'http://localhost:3010'
const USER_ID = localStorage.user


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
    axios.get(`${ROOT_ROUTE}/lists/user/${USER_ID}`)
    .then(response => {
      if (response.data !== []) {
        this.setState({ lists: response.data })
      }
    })
    .catch(error => console.log('Error retrieving lists', error))
  }

  // Function to create a comic reading list
  createList() {
    console.log(USER_ID)
    axios.post(`${ROOT_ROUTE}/lists`, {
      listName: this.state.listName,
      listDescription: this.state.listDescription,
      listIsPublic: this.state.listIsPublic,
      user: USER_ID
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
    axios.post(`${ROOT_ROUTE}/search`, {
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
    console.log("here is the selected comic", comic)
    console.log("here is the selected list", this.state.selectedList);
    console.log("add to list function, here is the selected list id", this.state.selectedList._id)
    console.log("add to list function, here is the selected comic Marvel id", comic.id)
    let resourceUrl = comic.urls[0].url
    let coverImage=`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`
    let date = comic.dates[0].date.substring(0,10)
    let printPrice = comic.prices[0].price
    let list =this.state.selectedList._id

    axios.post(`${ROOT_ROUTE}/comics`, {
      comicMarvelId: comic.id,
      comicTitle: comic.title,
      comicIssueNumber: comic.issueNumber,
      comicDescription: comic.description,
      comicPageCount: comic.pageCount,
      comicResourceUrl: resourceUrl,
      comicCoverImageUrl: coverImage,
      comicOnSaleDate: date,
      comicPrintPrice: printPrice,
      list: list,
      user: USER_ID
    })
      .then(response => {
        console.log("response received!")
      })
      .catch(error => console.log('Error saving a comic', error))
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
