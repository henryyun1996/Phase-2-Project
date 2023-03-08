import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Buttons from "./Buttons";
import ArtistCollection from "./ArtistCollection";
import Gallery from "./Gallery";

function HomePage({ currentUser }) {
    const [page, setPage] = useState("/");
    const history = useHistory();
    
    function handleChangePage(path) {
      setPage(path);
      history.push(path);
    }

  
    
    
    return (
      <div>
        <h1>{currentUser ? (`Hello ${currentUser && currentUser.name}!`) : "Welcome!" }</h1>
        <Buttons onChangePage={handleChangePage} />
        <br/>
        <Gallery />
        {/* do we need the routes here since they already live in app? */}
        
        {/* <Switch>
          <Route exact path="/artist-collection">
            <ArtistCollection />
          </Route>
        </Switch> */}
      </div>
    );
  }
  
  export default HomePage;
