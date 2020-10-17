import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../common/enum/routes';
import HomePage from './Home';
import PingPage from './Ping';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.DEFAULT} component={HomePage} />
        <Route exact path={Routes.PING} component={PingPage} />
      </Switch>
    </>
  );
};

export default App;
