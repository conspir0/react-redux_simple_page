import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Home from "./../Home/Home";
import About from "./../About/About";
import Contact from "./../Contact/Contact";
import Post from "./../Post/Post";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </Router>
    );
  }
}

export default App;
