import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import HomePage from "./HomePage";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";

const artistAPI = 'http://localhost:3000/artists';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(artistAPI)
      .then(res => res.json())
      .then(artistData => setArtists(artistData))
      .catch(error => console.error(error));
  }, []);

  return (
   <div className="App ui">
    <Switch>
      <Route exact path="/">
        <LogIn setCurrentUser={setCurrentUser} artists={artists}/>
      </Route>
      <Route exact path="/home">
        <HomePage currentUser={currentUser} artists={artists} />
      </Route>
      <Route exact path="/artist-collection">
        <ArtistCollection currentUser={currentUser} artists={artists}/>
      </Route>
      <Route exact path="/creations">
        <OwnWork currentUser={currentUser} />
      </Route>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
   </div>
  );
}

export default App;
