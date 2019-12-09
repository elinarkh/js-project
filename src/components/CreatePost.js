import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {createPost} from "../actions/postActions";
import {connect} from "react-redux";

class CreatePost extends Component {

  submitHandle = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const post = {
      title: form.elements.title.value,
      description: form.elements.description.value,
      image: form.elements.image.value,
    };
    this.props.createPost(post);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.post) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandle}>
          <Form.Group controlId={'title'}>
            <Form.Label>
              Title
            </Form.Label>
            <Form.Control type={'text'} placeholder={'Enter title'}/>
          </Form.Group>
          <Form.Group controlId={'description'}>
            <Form.Label>
              Description
            </Form.Label>
            <Form.Control type={'text'} placeholder={'Enter description'}/>
          </Form.Group>
          <Form.Group controlId={'image'}>
            <Form.Label>
              Image url
            </Form.Label>
            <Form.Control type={'text'} placeholder={'Enter image url'}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  createPost: createPost,
});

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
