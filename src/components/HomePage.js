import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";
import Buttons from "./Buttons";

const artistAPI = 'http://localhost:3000/artists'
const artworkAPI = 'http://localhost:3000/artwork'
function HomePage() {
    const [page, setPage] = useState("/home")
    const [artistData, setArtistData] = useState({})

    useEffect(() => {
        fetch(artistAPI)
        .then(res => res.json())
        .then(setArtistData)
    }, [])

    return (
        <div>
            <h1>Hello ...</h1>
            <Buttons onChangePage={setPage} />
            <Switch>
                <Route path="artist-collection">
                    <ArtistCollection artistData={artistData}/>
                </Route>
                <Route path="creations">
                    <OwnWork />
                </Route>
            </Switch>
        </div>
    )
}

export default HomePage;