import React, { useState } from "react";
import { Switch, Route, useHistory, useParams } from "react-router-dom";
import Buttons from "./Buttons";
import ArtistCollection from "./ArtistCollection";
import Gallery from "./Gallery";
import CreationsByArtist from "./CreationsByArtist";

function HomePage({ currentUser }) {
    const [page, setPage] = useState("/");
    const history = useHistory();
    
    function handleChangePage(path) {
      setPage(path);
      history.push(path);
    }

  
    
    
    return (
      <div>
        <h1>Hello {currentUser && currentUser.name}!</h1>
        <Buttons onChangePage={handleChangePage} />
        <Switch>
          <Route exact path="/artist-collection">
            <ArtistCollection />
          </Route>
          <Route exact path="/gallery/">
            <Gallery />
          </Route>
          <Route path="/gallery/:artist">
            <CreationsByArtist />
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default HomePage;
