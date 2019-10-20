import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import React from 'react';

function Footer() {
    return (
        <BrowserRouter>
            <div className="footer">
                <nav>
                    <Link to="/about">About</Link>
                    <ul> <Link to="/contacts">Contacts</Link> </ul>
                </nav>
                <Route
                    path="/about"
                    component={About}
                    exact
                />
                <Route
                    path="/contacts"
                    component={Contacts}
                />
            </div>
        </BrowserRouter>
    );
};

export default Footer;