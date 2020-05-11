import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import './App.css';
import LandingPage from './containers/LandingPage';
import Leaderboard from './containers/Leaderboard';

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
    <Grommet theme={hpe} themeMode="dark">
      <BrowserRouter onUpdate={hashLinkScroll()}>
        <Route
          exact
          path="/"
          render={props => <LandingPage {...props} day={initDayFilter} />}
        />
        <Route exact path="/hackshack" component={Leaderboard} />
      </BrowserRouter>
    </Grommet>
  );
};

export default App;
