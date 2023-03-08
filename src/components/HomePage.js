import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
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
      <>
       <div className="ui menu">
        <div className="header item">ArtWalks</div>
        <Link to= "/" className="item" 
        setCurrentUser=''>Log Out</Link>
      </div>
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
      </>
    );
  }
  
  export default HomePage;
