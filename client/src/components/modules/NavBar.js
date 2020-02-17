import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";


// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "707474204069-ibaig6vr8u2gf995465eel35t6kf6u1r.apps.googleusercontent.com";
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      
      return {
        style: {
         //"font-weight": isCurrent ? 900 : "inherit",
         textShadow: isCurrent ? "0 0 3px white" : "none",
        }
      };
    }}
  />
);
/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
  }


  logout() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    const contextThis = this;
    auth2.signOut().then(function () {
      auth2.disconnect();
      contextThis.props.handleLogout()
    });
  }

  render() {
    return (
      <>
      <div className="NavBar-container">
      <div className="NavBar-sidebar">
        <div className="NavBar-title">
              <Link className="title-link" to="/">NEW HOUSE</Link>
          </div>
          <div className="menu-item">
          <NavLink to="/" className="NavBar-link" data-tut="navbaraquarium">
            About
          </NavLink>
          </div>
          
          <div className="menu-item">
          <NavLink to="/government" className="NavBar-link" data-tut="navbarstore">
            Government
          </NavLink>
          </div>
          <div className="menu-item">
          <NavLink to="/facilities" className="NavBar-link" data-tut="navbarinventory">
            Facilities
          </NavLink>
          </div>
          <div className="menu-item">
          <NavLink to="/faq" className="NavBar-link" data-tut="navbarinventory">
            FAQ
          </NavLink>
          </div>
          <div className="menu-item">
          <NavLink to="/contact" className="NavBar-link" data-tut="navbarinventory">
            Contact
          </NavLink>
          </div>
          
      </div>
        
      </div>
      </>
    );
  }
}

export default NavBar;