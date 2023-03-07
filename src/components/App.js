import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import NewAccount from "./NewAccount";
import HomePage from "./HomePage";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";
import Gallery from "./Gallery";

const artistAPI = 'http://localhost:3000/artists';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [artists, setArtists] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch(artistAPI)
      .then(res => res.json())
      .then(artistData => setArtists(artistData))
      .catch(error => console.error(error));
  }, []);

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
          username={username} 
          setUsername={setUsername} 
          password={password} 
          setPassword={setPassword} 
          API={artistAPI}
          artists={artists}
          setArtists={setArtists}
        />
      </Route>
      <Route exact path="/home">
        <HomePage 
          currentUser={currentUser} 
        />
      </Route>
      <Route exact path="/artist-collection">
        <ArtistCollection 
          currentUser={currentUser} 
          artists={artists}
        />
      </Route>
      <Route exact path="/creations">
        <OwnWork 
        currentUser={currentUser} 
      />
      </Route>
      <Route path="/gallery" component={Gallery}/>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
   </div>
   </>
  );
}

export default App;
