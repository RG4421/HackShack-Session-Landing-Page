import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './containers/LandingPage.js';
import HackShackCarousel from './containers/HackShackCarousel.js';

const App = props => {
  const initDayFilter = window.location.hash ? 'all' : 9;

  const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
      }, 500);
    }
  };

  return (
    <BrowserRouter onUpdate={hashLinkScroll()}>
      <Route
        exact
        path="/"
        render={props => <LandingPage {...props} day={initDayFilter} />}
      />
      <Route exact path="/hackshack" component={HackShackCarousel} />
    </BrowserRouter>
  );
};

export default App;
