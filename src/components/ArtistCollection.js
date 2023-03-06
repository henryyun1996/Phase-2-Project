import React from "react";
import ArtistCard from "./ArtistCard";


function ArtistCollection({ artistData }) {
    const artistCards =  artistData.map((artist) => {
        return <ArtistCard artist={artist} key={artist.id} />
    })
    return (
        <div className="ui grid container">
        <h1>Artist Collection Component</h1>
        {artistCards}
        </div>
    )
}

export default ArtistCollection;