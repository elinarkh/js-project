import React, {Component} from 'react';
import './App.css';
import Post from "./components/Post";
import Footer from "./components/Footer";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import PostDetail from "./components/PostDetail";
import Header from "./components/Header";

class App extends Component {

    /*componentDidMount = () => {
        this.props.getProfileFetch()
    };*/

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Post}/>
                        <Route path='/account' component={Header}/>
                        <Route path='/info' component={Footer}/>
                        <Route path='/:post_id' component={PostDetail}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );

    }
}

/*
const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch())
});

export default connect(null, mapDispatchToProps)(App);*/

export default App;
