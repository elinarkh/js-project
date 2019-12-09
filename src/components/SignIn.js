import React, {Component} from 'react';
import {connect} from "react-redux";
import * as authActions from "../actions/authActions";
import {Link} from "react-router-dom";

class SignIn extends Component {

  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.props.checkUser();
  }

  handleChange = type => event => {
    this.setState({
      [type]: event.nativeEvent.text
    });
  };

  handleSubmit = event => {
    this.props.userLoginFetch(this.state)
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.auth.authenticated) {
      this.props.navigation.navigate('Main');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange('username')}
        /><br/>
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange('password')}
        /><br/>
        <Link to="/"><input type='submit'/></Link>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});
const mapDispatchToProps = {
  userLoginFetch: authActions.userLoginFetch,
  checkUser: authActions.checkUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

