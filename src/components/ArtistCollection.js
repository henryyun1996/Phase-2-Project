import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";

const artistAPI = 'http://localhost:3000/artists'
function ArtistCollection() {
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        fetch(artistAPI)
        .then(res => res.json())
        .then(setArtistData)
    }, [])

    const artistCards =  artistData.map(artist => {
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