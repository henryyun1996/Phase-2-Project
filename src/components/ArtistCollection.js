import React from "react";
import ArtistCard from "./ArtistCard";

function ArtistCollection({ artists, setArtists }) {

    const artistCards =  artists.map(artist => {
       return <ArtistCard artist={artist} key={artist.id}/>
    })
    return (
        <>
        <div>
        <h1>Artist Component</h1>
        </div>
        <br/>
        <div className="ui grid container ">
        {artistCards}
        </div>
        </>
    )
}

export default ArtistCollection;