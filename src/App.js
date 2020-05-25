import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import './App.css';
import Leaderboard from './containers/Leaderboard';
import HomePage from './pages/Home';
import ArcadePage from './pages/Arcade';
import StickerWallPage from './pages/StickerWall';

const App = () => {
  const hashLinkScroll = () => {
    const { hash } = window.location;
    // console.log('hash', hash);
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
          render={props => (
            <HomePage
              background="/img/hack-shack-home-background.png"
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/arcade"
          render={props => (
            <ArcadePage background="/img/ezmeral-bg.png" {...props} />
          )}
        />
        <Route
          exact
          path="/stickerwall"
          render={props => (
            <StickerWallPage background="/img/ezmeral-bg.png" {...props} />
          )}
        />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </BrowserRouter>
    </Grommet>
  );
};

export default App;
