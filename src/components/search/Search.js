import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Header, Input } from 'semantic-ui-react';
import ResultsList from './ResultsList';
import Results from './Results';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      characterName: '',
      startYear: '',
      endYear: ''
    }
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
            onClick={this.props.handleSearch}>
              Search
          </Button>
        </Form>

        <ResultsList
          handleInput={this.props.handleInput}
        />
      </div>
    )
  }
}
