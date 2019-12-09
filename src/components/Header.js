import {BrowserRouter, Link, Route} from "react-router-dom";
import React from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Header() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <div className="auth-header">
            <ul><Link to="/signup">SignUp</Link></ul>
            <ul><Link to="/signin">SignIn</Link></ul>
          </div>
        </nav>
        <Route
          path="/signup"
          component={SignUp}
          exact
        />
        <Route
          path="/signin"
          component={SignIn}
        />
      </div>
    </BrowserRouter>
  );
}
export default Header;
