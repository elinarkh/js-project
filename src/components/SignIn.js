import React, {Component} from 'react';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import {Link} from "react-router-dom";

class SignIn extends Component {

  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLoginFetch(this.state)
  };

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
        /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        /><br/>

        <Link to="/"><input type='submit'/></Link>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(authActions.userLoginFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignIn);

