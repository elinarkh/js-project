import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PostDetail from "./components/PostDetail";
import Post from "./components/Post";
import RegOrLog from "./components/RegOrLog";
import Footer from "./components/Footer";


class App extends Component {


  render() {
    return (
       <BrowserRouter>
           <Link to="/signup">Sign Up</Link>
           <br/>
           <Link to="/signin">Sign In</Link>
           <Switch>
               <Route exact path='/' component={Post}/>
               <Route path='/signup' component={SignUp}/>
               <Route path='/signin' component={SignIn}/>
               <Route path='/post/:id' component={PostDetail}/>
           </Switch>
       </BrowserRouter>

    );
  }
}

export default App;