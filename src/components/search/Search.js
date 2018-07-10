import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Header, Input } from 'semantic-ui-react';
import Results from './Results';
import axios from 'axios';

const SEARCH_ROUTE = 'http://localhost:3010/search';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  // Function for sending axios call to back end search function
  handleSearch(event) {
    event.preventDefault();
    console.log('Handle search function', this.state.characterName)
    axios.post(`${SEARCH_ROUTE}`, {
      characterName: this.state.characterName,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    })
      .then(response => {
        console.log('Here is the response', response.data);
      })
      .catch(err => console.log('This is a search error', err))

  }


  render() {
    return(
      <div>
        <Form>
          <Header as='h4'>
            Search for comics by character
          </Header>
          <Form.Field>
            <label>Character name</label>
            <Input
              name="characterName"
              onChange={this.props.handleInput}
              placeholder="Enter a character name"/>
          </Form.Field>
          <Header as='h5'>Enter a date range (optional)</Header>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Start year</label>
              <Input
                name='startYear'
                onChange={this.props.handleInput}
                placeholder="Enter a starting year"/>
            </Form.Field>
            <Form.Field>
              <label>End year</label>
              <Input
                name='endYear'
                onChange={this.props.handleInput}
                placeholder="Enter an ending year"/>
            </Form.Field>
          </Form.Group>
          <Button
            type='submit'
            onClick={this.handleSearch}>
              Search
          </Button>
        </Form>

        {this.state.results.length > 0 && <Redirect to={{
            pathname: '/results',
            state: {results: this.state.results}
          }}/>
        }
      </div>
    )
  }
}
