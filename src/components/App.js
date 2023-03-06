import React from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import HomePage from "./HomePage";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";

function App() {
  return (
   <div className="App ui">
    <Switch>
      <Route exact path="/" component={LogIn}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/artist-collection" component={ArtistCollection}/>
      <Route exact path="/creations" component={OwnWork}/>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
   </div>
  );
}

export default App;
