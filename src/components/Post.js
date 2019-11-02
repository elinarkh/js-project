import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../actions/postActions';
import {Link, Route} from "react-router-dom";
import PostDetail from "./PostDetail";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
        this.handleCreatePost = this.handleCreatePost.bind(this);
    }

    componentDidMount() {
        this.props.getPosts();
    }
    /*
        shouldComponentUpdate(nextProps, nextState){
            return this.state.posts!==nextState.posts
        }*/

    handleCreatePost() {
        let data = {}
        this.props.createPost(data);
    }

    componentWillMount() {
        console.log('Component will mount!')
    }

    render() {
        return (
            <div className="post-container">
                { this.props.posts.map(post =>
                    <div className="post-block" key={post.id}>
                        <p>Visits: { this.state.count }</p>
                        <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}/>
                        <Link onClick={() => this.setState({ count: this.state.count + 1 })}
                              to={`/post/${post.id}`}><h4 className="post-title">{ post.title }</h4></Link>
                        <Route path="`/post/${post.id}`">
                            <PostDetail post={ post } />
                        </Route>
                    </div>
                )}
                <button onClick={this.handleCreatePost}>new post</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
});

const mapDispatchToProps = {
    getPosts: postActions.getPosts,
    createPost: postActions.createPost
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
