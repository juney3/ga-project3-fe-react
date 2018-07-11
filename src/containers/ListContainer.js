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
      userid: localStorage.user,
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
      comicOnSaleDate: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onSelectList = this.onSelectList.bind(this);
  }

  // Function for tracking state changes in inputs fields
  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Function for sending axios call to back end search function
  handleSearch (event) {
    event.preventDefault();
    console.log('Handle search function', this.state.characterName)
    console.log("here is the initial search results state", this.state.searchResults)
    axios.post('http://localhost:3010/search', {
      characterName: this.state.characterName,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    })
      .then(response => {
        console.log('Here is the response', response);
        this.setState({
          searchResults: response.data
        });
        console.log('I set the results in state', this.state.searchResults)
      })
      .catch(err => console.log('This is a search error', err))
  }


  onSelectList(list) {
    console.log('List is clicked!');
    this.setState({
      selectedList: list
    })
    console.log('The select list is', this.state.selectedList)
  }

  // fetchListData(id) {
  //   ListModel.all().then( (res) => {
  //    console.log('Here is the list data', res)
  //    this.setState({
  //      lists: res.data
  //    })
  //   })
  // }


  componentDidMount() {
    console.log("I am the list container and here is the user id", localStorage.user)
  }

  render() {

    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <MyLists
                onSelectList={this.state.onSelectList}
                lists={this.state.lists}
                selectedList={this.state.selectedList}
                listName={this.state.listName}
                listDescription={this.state.listDescription}
                listIsPublic={this.state.isPublic}
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <ComicList
                handleInput={this.handleInput}
                handleSearch={this.handleSearch}
                selectedList={this.state.selectedList}
                searchResults={this.state.searchResults}
                comicMarvelId={this.state.comicMarvelId}
                comicTitle={this.state.comicTitle}
                comicIssueNumber={this.state.comicIssueNumber}
                comicDescription={this.state.comicDescription},
                comicPageCount={this.state.comicPageCount},
                comicResourceUrl={this.state.comicResourceUrl},
                comicCoverImageUrl={this.state.comicCoverImageUrl},
                comicOnSaleDate={this.comicOnSaleDate}
              />
              <EditList />
            </Grid.Column >
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
