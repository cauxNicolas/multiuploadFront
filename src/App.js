import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// containers
import NavigationHeader from "./containers/Navigation";
import Home from "./containers/Home";
import User from "./containers/User";
import Settings from "./containers/Settings";

function App() {
  return (
    <div id="homePage">
      <Router>
        <NavigationHeader />
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
