import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Input } from 'semantic-ui-react';
import ResultsList from './ResultsList';
import Results from './Results';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: '',
      startYear: '',
      endYear: ''
    }
  }

  render() {
    return(
      <div>
        <div className="searchForm">
          <Grid centered columns={2}>
            <Grid.Column>
              <Form>
                <Header as='h2'>
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
            </Grid.Column>
          </Grid>

          <Results
            handleInput={this.props.handleInput}
            selectedList={this.props.selectedList}
            searchResults={this.props.searchResults}
          />
        </div>
        <Grid centered columns={2}>
          <Grid.Column textAlign="center">
            <footer >
              <a href="http://marvel.com" target="new">Data provided by Marvel. © 2018 MARVEL</a>
            </footer >
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
