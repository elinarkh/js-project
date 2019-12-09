import {BrowserRouter} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import React from 'react';

function Footer() {
  return (
    <BrowserRouter>
      <div className="footer">
        <About/>
        <br/>
        <Contacts/>
      </div>
    </BrowserRouter>
  );
}
export default Footer;
