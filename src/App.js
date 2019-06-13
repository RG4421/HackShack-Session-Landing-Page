import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css"
import LandingPage from './containers/LandingPage.js'
import HackShackCarousel from './containers/HackShackCarousel.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Route exact path="/" component= {LandingPage}/>
            <Route  exact path="/hackshack" component={HackShackCarousel} />
      </BrowserRouter>
    )
  }
}

export default App
