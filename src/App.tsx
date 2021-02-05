import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavigationBar/NavigationBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import About from './containers/About/About';
import SideMenu from './containers/SideMenu/SideMenu';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
	  <div className="App">
      <NavBar/>
      <SideMenu />
      <div className="app-body">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">

          </Route>
          <Route path="/">


            <VideoPlayer/>
          </Route>
        </Switch>
      </div>
      {/* <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
