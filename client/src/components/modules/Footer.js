import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Footer.css";

import floral from "../data/floral-divider.png";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
        <img src={floral} className='divider'></img>
      <div className='footer-container'>
        Questions? Contact New House Exec&nbsp;
        <Link to='/government'>here</Link> or New House General Team&nbsp;
        <Link to='/contact'>here</Link>.
        <br></br>
        <br></br>
        Suggestions for the website? Email me at nh-webmaster@mit.edu :)
      </div>
      </>
    );
  }
}

export default Footer;