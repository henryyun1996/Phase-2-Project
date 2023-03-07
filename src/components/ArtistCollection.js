import {React, useEffect, useState} from "react";
import ArtistCard from "./ArtistCard";


function ArtistCollection( {setViewCreations, artists, setArtists }) {
    const [artistData, setArtistData] = useState([])
    const artistAPI = 'http://localhost:3000/artists'

    useEffect(() => {
        fetch(artistAPI)
        .then(res => res.json())
        .then(setArtistData)
    }, [])

    const artistCards =  artistData.map(artist => {
       return <ArtistCard artist={artist} key={artist.id} setViewCreations={setViewCreations}/>
    })
    return (
        <>
        <div>
        <h1 className="ui block header">Artist Component</h1>
        </div>
        <div className="ui grid ">
        {artistCards}
        </div>
        </>
    )
}

export default ArtistCollection;