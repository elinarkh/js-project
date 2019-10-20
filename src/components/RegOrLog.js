import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function RegOrLog() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="container">
                    <nav>
                        <div className="auth-header">
                            <Link to="/signup">SignUp</Link>
                            <Link to="/signin">SignIn</Link>
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
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default RegOrLog;