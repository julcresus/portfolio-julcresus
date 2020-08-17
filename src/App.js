import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Playstation from "./playstation";
import Home from "./home";
import EveryMindMatters from "./everymindmatters";
import PrideInLondon from "./prideinlondon";
import SgDesign from "./sgdesign";


function App() {
  return (
    <div className="App">
      <Router>
      <div className="header">
        <h1>
          <a href='/'>julien cresus</a>
        </h1>
      </div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playstation">
            <Playstation />
          </Route>
          <Route path="/prideinlondon">
            <PrideInLondon />
          </Route>
          <Route path="/everymindmatters">
            <EveryMindMatters />
          </Route>
          <Route path="/sgdesign">
            <SgDesign />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
