import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Home, Community, Arcade } from './pages/index';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { throwError } from 'rxjs';

const App = () => {
  let gtagId;
  let gaDebug;
  if (process.env.NODE_ENV === 'production') {
    gtagId = 'UA-108944070-5';
    gaDebug = false;
  } else if (process.env.NODE_ENV === 'development') {
    gtagId = 'UA-NNNNNN-N';
    gaDebug = false;
  } else {
    throwError(
      "NODE_ENV not set to 'production' nor 'development'." +
        'Google Analytics tracking will not be initialized.',
    );
  }
  ReactGA.initialize(gtagId, {
    debug: gaDebug,
  });
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { location } = window;
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }
  }, []);
  return (
    <Grommet theme={hpe} themeMode="dark" full>
      <Router history={history}>
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
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
