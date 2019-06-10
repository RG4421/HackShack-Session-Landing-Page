import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css"
import Leaderboard from './containers/Leaderboard.js'
import LandingPage from './containers/LandingPage.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Route exact path="/" component= {LandingPage}/>
            <Route  exact path="/leaderboard" component={Leaderboard} />
      </BrowserRouter>
    )
  }
}

export default App
