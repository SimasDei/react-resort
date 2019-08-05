import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/rooms'} component={Rooms} />
      <Route exact path={'/room/:id'} component={SingleRoom} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
