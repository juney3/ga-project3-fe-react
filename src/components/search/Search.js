import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Header, Input } from 'semantic-ui-react';
import Results from './Results';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    let url="https://gateway.marvel.com:443/v1/public/characters/1009610/comics?apikey=81e5319b6802c92670e2ef8122cc449e"


    // console.log(md5('81e5319b6802c92670e2ef8122cc449e'+Date.now()))
    axios.get(url)
      .then(response => {
        let data = {
          results: response.data
        }
        this.setState(data);
      })
      .catch(error => console.log(error))
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
            onClick={this.onSearch}>
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
