import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Buttons from "./Buttons";
import ArtistCollection from "./ArtistCollection";

// const artistAPI = 'http://localhost:3000/artists'
// const artworkAPI = 'http://localhost:3000/artwork'

function HomePage() {
    const [page, setPage] = useState("/");
    const [artistData, setArtistData] = useState({})
    const history = useHistory();

    // useEffect(() => {
    //     fetch(artistAPI)
    //     .then(res => res.json())
    //     .then(setArtistData)
    // }, [])
  
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
            <ArtistCollection artistData={artistData} />
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default HomePage;
