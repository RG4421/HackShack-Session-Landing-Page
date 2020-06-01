import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Home, Community, Arcade, StickerWall } from './pages/index';

const App = () => {
  return (
    <Grommet theme={hpe} themeMode="dark" full>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/arcade">
            <Arcade />
          </Route>
          <Route exact path="/stickerwall">
            <StickerWall />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
