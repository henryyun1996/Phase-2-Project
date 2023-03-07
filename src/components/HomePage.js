import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Buttons from "./Buttons";
import ArtistCollection from "./ArtistCollection";
import Gallery from "./Gallery";

function HomePage() {
    const [page, setPage] = useState("/");
    const history = useHistory();

   
  
    function handleChangePage(path) {
      setPage(path);
      history.push(path);
    }
  
    return (
      <div>
        <h1>Hello ...</h1>
        <Buttons onChangePage={handleChangePage} />
        <Switch>
          <Route exact path="/artist-collection">
            <ArtistCollection onChangePage={handleChangePage}/>
          </Route>
          <Route exact path="/gallery">
            <Gallery onChangePage={handleChangePage}/>
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default HomePage;
