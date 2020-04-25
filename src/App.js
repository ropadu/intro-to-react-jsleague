import React from "react";
import "./styles.css";

import Nav from "./gui/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppStateProvider } from "./hooks/useAppState";

import Random from "./routes/random";
import Editor from "./routes/editor";
import List from "./routes/list";
import NewMovie from "./routes/new";

export const Home = () => (
  <div className="container">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
  </div>
);

export default function App() {
  return (
    <Router>
      <AppStateProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/random" component={Random} />
            <Route exact path="/list" component={List} />
            <Route exact path="/movie/:id" component={Editor} />
            <Route exact path="/new" component={NewMovie} />
          </Switch>
        </div>
      </AppStateProvider>
    </Router>
  );
}
