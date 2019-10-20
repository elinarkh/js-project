import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../actions/postActions';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleCreatePost = this.handleCreatePost.bind(this);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    handleCreatePost() {
        let data = {
            title: "welcome to world",
            body: "hello world",
            userId: 1
        }
        this.props.createPost(data);
    }
    render() {
        return (
            <div className="post-container">
                { this.props.posts.map(post =>
                    <div className="post-block" key={post.id}>
                        <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}/>
                        <h2 className="post-title">{ post.title }</h2>
                    </div>
                )}
                <button onClick={this.handleCreatePost}>new post</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.post.posts,
    //firstPost: state.post.firstPost
});

const mapDispatchToProps = {
    getPosts: postActions.getPosts,
    createPost: postActions.createPost
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
