import React, { Suspense, lazy } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Navbar from './components/ui/Navbar'

import About from './pages/about';
import Todo from './pages/todo';
// const About = lazy(() => import('./pages/about'));
// const Todo = lazy(() => import('./pages/todo'));
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/todo">
              <Todo />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
