import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import './App.css';
import LandingPage from './containers/LandingPage';
import Leaderboard from './containers/Leaderboard';
import HomePage from './pages/Home';

const App = () => {
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
        <Box
          background={{
            image: 'url(/img/ezmeral-bg.png)', // swap BG based on route
            size: 'cover',
            opacity: 0.1,
          }}
          width="100vw"
          height={{ min: '100vh', max: 'auto' }}
          align="center"
        >
          <Route
            exact
            path="/home-old"
            render={props => <LandingPage {...props} day={initDayFilter} />}
          />
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route
            exact
            path="/schedule"
            render={props => <HomePage {...props} />}
          />
          <Route exact path="/hackshack" component={Leaderboard} />
        </Box>
      </BrowserRouter>
    </Grommet>
  );
};

export default App;
