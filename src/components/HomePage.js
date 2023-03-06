import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ArtistCollection from "./ArtistCollection";
import OwnWork from "./OwnWork";
import Buttons from "./Buttons";

function HomePage() {
    const [page, setPage] = useState("/home")

    return (
        <div>
            <h1>Hello ...</h1>
            <Buttons onChangePage={setPage} />
            <Switch>
                <Route path="artist-collection">
                    <ArtistCollection />
                </Route>
                <Route path="creations">
                    <OwnWork />
                </Route>
            </Switch>
        </div>
    )
}

export default HomePage;