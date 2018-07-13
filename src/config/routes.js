import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Landing from '../components/Landing';
import Search from '../components/search/Search';
import Results from '../components/search/Results';
import ListContainer from '../containers/ListContainer';
import ProfileContainer from '../containers/ProfileContainer';

//Application routess
export default (
  <Switch>
    <Route path='/lists' component={ ListContainer } />
    <Route path='/profile' component={ ProfileContainer } />
    <Route path='/search' component={ Search } />
    <Route path='/results' component={ Results } />
  </Switch>
)
