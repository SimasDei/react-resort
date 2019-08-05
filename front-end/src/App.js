import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error404 from './pages/Error';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/rooms'} component={Rooms} />
        <Route exact path={'/room/:slug'} component={SingleRoom} />
        <Route component={Error404} />
      </Switch>
    </>
  );
}

export default App;
