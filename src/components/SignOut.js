import React, {Component} from 'react';
import {userLogout} from "../actions/authActions";
import {connect} from "react-redux";


class SignOut extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  handleLogout = () => {
    this.props.userLogout();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.auth);

    if (!this.props.auth.authenticated) {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <div>
        <button title={'Logout'} onClick={this.handleLogout}/>
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