// Import from modules
import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios'
import { Icon } from 'semantic-ui-react';

// Import from components and config
import Header from './components/header/Header';
import LogIn from './components/header/LogIn';
import SignUp from './components/header/SignUp';
import LogOut from './components/header/LogOut';
import Footer from './components/Footer';
import Routes from './config/routes';

const ROOT_ROUTE = "http://localhost:3010/users"

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
      isLoggedIn: false
    }

    // Bind methods
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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
      user: ''
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
    axios.post(`${ROOT_ROUTE}/signup`, {
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
          user: response.data.user
        })
      })
      .catch(err => console.log("This is a user signup error", err))
  }

  handleLogIn(event){
    console.log("User is logging in");
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
