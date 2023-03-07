import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import HomePage from "./HomePage";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";
import Gallery from "./Gallery";

function App() {
  return (
  <>
  <nav className="ui five item menu">
    
    <Link to="/" className="item">Log In</Link>
    <Link to="/home" className="item">Home</Link>
    <Link to="/artist-collection" className="item">Artists</Link>
    <Link to="/gallery" className="item">Gallery</Link>
    <Link to="/creations" className="item">My Profile</Link>

  </nav>
   <div className="App ui">
    <Switch>
      <Route exact path="/" component={LogIn}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/artist-collection" component={ArtistCollection}/>
      <Route exact path="/creations" component={OwnWork}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
   </div>
   </>
  );
}

export default App;
