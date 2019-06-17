import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/LandingPage.js";
import HackShackCarousel from "./containers/HackShackCarousel.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initDayFilter: window.location.hash ? "all" : 18
    };
  }

  hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
      }, 500);
    }
  };

  render() {
    return (
      <BrowserRouter onUpdate={this.hashLinkScroll()}>
        <Route
          exact
          path="/"
          render={props => (
            <LandingPage {...props} day={this.state.initDayFilter} />
          )}
        />
        <Route exact path="/hackshack" component={HackShackCarousel} />
      </BrowserRouter>
    );
  }
}

export default App;
