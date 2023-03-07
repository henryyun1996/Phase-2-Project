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

    function handleViewCreations(path) {
      console.log("clicked")
    }
  
    return (
      <div>
        <h1>Hello ...</h1>
        <Buttons onChangePage={handleChangePage} />
        <Switch>
          <Route exact path="/artist-collection">
            <ArtistCollection />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default HomePage;
