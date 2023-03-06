import React from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import HomePage from "./HomePage";

function App() {
  return (
   <div className="container">
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
    </Switch>
   </div>
  );
}

export default App;
