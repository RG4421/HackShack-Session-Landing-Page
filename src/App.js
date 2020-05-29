import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Home, HackShackAttack } from './pages/index';
import { Leaderboard } from './components/index';

const App = () => {
  return (
    <Grommet theme={hpe} themeMode="dark" full>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hackshackattack">
            <HackShackAttack />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
