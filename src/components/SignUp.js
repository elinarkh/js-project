import React, {Component} from 'react';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import {Link} from 'react-router-dom';

class SignUp extends Component {

  state = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  componentWillMount() {
    console.log('Component will mount!')
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    this.props.userPostFetch(this.state)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

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

        <label>Confirm Password</label>
        <input
          name='confirmation'
          placeholder='confirmation'
          value={this.state.confirmPassword}
          onChange={this.handleChange}
        /><br/>
        <Link to="/"><input type='submit' value="Submit"/></Link>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(authActions.userRegisterFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);
