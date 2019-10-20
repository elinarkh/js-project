import React from 'react';
import './App.css';
import Post from "./components/Post";
import RegOrLog from "./components/RegOrLog";
import Footer from "./components/Footer";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Post} />
                <Post/>
                <Route path="/RegOrLog" exact component={RegOrLog} />
                <ul><Link to="/components/RegOrLog" className="btn btn-primary">Sign In</Link></ul>
            </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
