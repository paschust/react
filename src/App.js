import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Products from './Products';
//import Rating from './Rating';
//import {Button} from 'react-bootstrap'; 
import {Nav, Navbar} from 'react-bootstrap';
import JumboTronComponent from './Jumbotron';
import UserForm from './UserForm';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/github">GitHub</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/github/user/:login/:score" component={GitHubUser}/>
          <Route path="/github" component={GitHub} />
          <Route exact path="/" component={Home} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  
  formatName(user){
    return user.firstName + ' ' + user.lastName;
  }

  render(){
    const user = {
      firstName: 'Paul',
      lastName: 'Schuster'
    };
    
    // const isValid = true;

    return (  
      <div>
          <h1>
            Hello, {this.formatName(user)}
          </h1>
          <hr />
          <JumboTronComponent>
            This is a long sentence, and I want to insert content into the 
            Jumbotron component from the outside.
          </JumboTronComponent>
          <hr />
          <GitHub />
          <hr />
          <Products />
          <hr />
          <UserForm />
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>Not Found</div>
    )
  }
}