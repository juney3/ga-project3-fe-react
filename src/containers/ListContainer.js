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
      pleaseRerender: [],
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
      openModal: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onSelectList = this.onSelectList.bind(this);
    this.createList = this.createList.bind(this);
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
      console.log(response)
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
      console.log(response);
      tempList.push(response.data)
      console.log(tempList);
      this.setState({
        lists: tempList,
        openModal: false
      })
    })
    .catch(error => console.log('Error creating reading list', error))
  }

  // Function to set state to a selected list for display
  onSelectList(list) {
    console.log('List is clicked!');
    console.log(list);

    this.setState({
      selectedList: list
    })

    console.log('The selected list is', this.state.selectedList)

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

// Lifecycle methods
  componentWillMount() {
    this.getUserLists();
  }

  componentDidMount() {
    console.log("I am the list container and here is the user id", this.state.user)
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
              />
              <EditList />
            </Grid.Column >
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
