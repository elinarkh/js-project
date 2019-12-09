import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PostDetail from "./components/PostDetail";
import Post from "./components/Post";
import {Button, Container, Nav} from "react-bootstrap";
import CreatePost from "./components/CreatePost";
import SignOut from "./components/SignOut";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Nav variant={"tabs"}>
            <Nav.Item>
              <Nav.Link>
                <Link to="/">
                  <Button variant="info">Home</Button>
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/signup">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/signin">
                  <Button variant={"success"}>Sign In</Button>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/signout">
                  <Button variant={"success"}>Sign Out</Button>
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Switch>
            <Route exact path='/' component={Post}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signout' component={SignOut}/>
            <Route path='/post/:id' component={PostDetail}/>
            <Route path='/create' component={CreatePost}/>
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
