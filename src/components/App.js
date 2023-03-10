import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./LogIn";
import NewAccount from "./NewAccount";
import HomePage from "./HomePage";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";

const artistAPI = 'http://localhost:3000/artists';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [artists, setArtists] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch(artistAPI)
      .then(res => res.json())
      .then(artistData => {
        // console.log(artistData);
        setArtists(artistData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
  <>
   <div className="App ui">
    <Switch>
      <Route exact path="/">
        <LogIn 
          setCurrentUser={setCurrentUser} 
          artists={artists} 
          username={username} 
          setUsername={setUsername} 
          password={password} 
          setPassword={setPassword} 
        />
      </Route>
      <Route exact path="/new-account">
        <NewAccount 
          API={artistAPI}
          artists={artists}
          setArtists={setArtists}
          setUsername={setUsername} 
          setPassword={setPassword} 
        />
      </Route>
      <Route exact path="/home">
        <HomePage 
          currentUser={currentUser}
          artists={artists}
          setArtists={setArtists}
        />
      </Route>
      <Route exact path="/artist-collection">
        <ArtistCollection 
          currentUser={currentUser} 
        />
      </Route>
      <Route exact path="/creations">
        <OwnWork 
          currentUser={currentUser} 
      />
      </Route>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
   </div>
   </>
  );
}

export default App;

// responsible for holding and passing down "artist" array from db.json down to multiple components
// also responsible for providing pathways for the different URLs using Switch