/*
import React, {Component} from "react";
import * as postActions from "../actions/postActions";
import {connect} from "react-redux";

class PostDetail extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getPost();
    }

    render() {
        return (
            <div className="post-detail">
                <div>
                    { this.props.posts.map(post =>
                        <div className="post-block" key={post.id}>
                            <div>{ post.title }</div>
                            <div>{ post.description }</div>
                            <div>{ post.image }</div>
                        </div>
                    )}
                </div>
            </div>
        )

    }
}
const mapStateToProps = (state) => ({
    post: state.post.post
})

const mapDispatchToProps = {
    getPost: postActions.getPost,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetail);

*/
