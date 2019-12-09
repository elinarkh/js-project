import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as postActions from '../actions/postActions';
import {Link, Route} from "react-router-dom";
import PostDetail from "./PostDetail";
import {Button, Card, Container} from "react-bootstrap";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleCreatePost = this.handleCreatePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleCreatePost() {
    let data = {};
    this.props.createPost(data);
  }

  componentWillMount() {
    console.log('Component will mount!')
  }

  render() {
    return (
      <Container style={{margin: 30}}>
        <Button onClick={this.handleCreatePost}>Create Post</Button>
        <div className="d-flex flex-wrap justify-content-between">
          {this.props.posts.map(post =>
            <Card style={{ marginTop: 50, width: '18rem' }} key={post.id}>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>
                  {post.title}
                </Card.Title>
                <Card.Text>
                  {post.description}
                </Card.Text>
                <Link to={`/post/${post.id}`}><Button variant={"primary"}>Details</Button></Link>
              </Card.Body>

              <Route path="`/post/${post.id}`">
                <PostDetail post={post}/>
              </Route>

            </Card>
          )}
        </div>
      </Container>
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
