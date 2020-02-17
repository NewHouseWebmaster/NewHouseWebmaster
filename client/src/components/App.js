import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import Footer from "./modules/Footer.js";

import "../utilities.css";
import "./App.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import About from "./pages/About.js";
import Faq from "./pages/Faq.js";
import Contact from "./pages/Contact.js";
import Facilities from "./pages/Facilities.js";
import Government from "./pages/Government.js";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
  }

  handleLogin = (res) => {
  };

  handleLogout = () => {
  };

  render() {
    return (
      <>
      <div className="App-container">
        <NavBar/>
        <Router>
          <About 
            path="/"
          />
          <Government
            path="/government"
          />
          <Facilities
            path="/facilities"
          />
          <Faq
            path="/faq"
          />
          <Contact
            path="/contact"
          />
          <NotFound default />
        </Router>
        <Footer />
        </div>
      </>
    );
  }
}

export default App;
