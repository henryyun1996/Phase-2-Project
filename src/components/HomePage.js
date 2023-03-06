import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Buttons from "./Buttons";
import ArtistCollection from "./ArtistCollection";

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
          <Route exact path="/artist-collection" component={ArtistCollection} />
        </Switch>
      </div>
    );
  }
  
  export default HomePage;