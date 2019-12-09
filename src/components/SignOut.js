import React, {Component} from 'react';
import {userLogout} from "../actions/authActions";
import {connect} from "react-redux";
import {Redirect, Router} from "react-router-dom";


class SignOut extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      direct: false
    }
  }

  redirect = () => {
    this.setState({ redirect: true });
  };

  handleLogout = () => {
    this.props.userLogout();
  };

  render() {
    if (!this.props.auth.authenticated && this.state.redirect === true) {
      this.setState({ redirect: false });
      console.log("logged in");
      return (
        <Router>
          <Redirect to="/signin" />
        </Router>
      );
    }
    return (
      <div >
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  userLogout: userLogout,
};

const mapStateToProps = state => ({
  ...state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);