import React, { Component } from 'react';
import EditList from '../components/comic_list/EditList';
import ComicList from '../components/comic_list/ComicList';
import MyLists from '../components/comic_list/MyLists';
import { Grid } from 'semantic-ui-react';

export default class ListContainer extends Component {
  constructor() {
    super()

    this.state={
      userid: localStorage.user
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSelectList(list) {
    console.log('List is clicked!');
    this.setState({
      selectedList: list
    })
    console.log('The select list is', this.state.selectedList)
  }

  // fetchListData() {
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
              <MyLists />
            </Grid.Column>
            <Grid.Column width={12}>
              <ComicList
                handleInput={this.handleInput}
              />
              <EditList />
            </Grid.Column >
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
