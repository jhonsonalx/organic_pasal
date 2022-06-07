import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </React.Fragment>
  );
}

