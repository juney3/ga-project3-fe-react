// Import from modules
import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'

// Import from components and config
import Header from './components/header/Header';
import LogIn from './components/header/LogIn';
import SignUp from './components/header/SignUp';
import LogOut from './components/header/LogOut';
import Footer from './components/Footer';
import Routes from './config/routes';

const USER_ROUTE = "http://localhost:3010/users"

class App extends Component {
  constructor() {
    super()

    // Set state for sign up
    this.state={
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false,
      redirect: false
    }

    // Bind methods
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  // User auth methods
  handleLogOut() {
    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false,
      user: '',
      redirect: true
    })
    localStorage.clear()
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignUp(event) {
    console.log("User is signing up");
    event.preventDefault();
    axios.post(`${USER_ROUTE}/signup`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(response => {
        localStorage.token = response.data.token;
        localStorage.user = response.data.user;
        console.log("Here is the user id from the response", response.data.user);
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          redirect: true
        })
      })
      .catch(err => console.log("This is a user signup error", err))
  }

  handleLogIn(event){
    event.preventDefault();
    axios.post('http://localhost:3010/users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token;
        localStorage.user = response.data.user;
        console.log("Here is the user id from the response", response.data.user);
        this.setState({
          isLoggedIn: true,
          user: response.data.user
        })
      })
      .catch(err => console.log("This is a login error", err))
  }

  // Get community lists for display on landing page
  getRecentPublicLists() {
    axios.post('http://localhost:3010/lists/public')
      .then(response => {
        console.log("public lists received!", response.data)
      })
      .catch(err => {
        console.log("this is a public list retrieval error", err)
      })
  }

  // Lifecycle methods
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    }
    else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  // Render method
  render() {
    return (
      <div className="App">
        <div className="header">
          < Header
            isLoggedIn={this.state.isLoggedIn}
            user={this.state.user}/>
        </div>
        <div className="main">
          { Routes }
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUp
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogOut={this.handleLogOut} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogIn
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn} />
                )
              }}
            />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
