import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";
import ArtistCard from "./ArtistCard";


function ArtistCollection( {setViewCreations, currentUser }) {
    const [artistData, setArtistData] = useState([])
    const artistAPI = 'http://localhost:3000/artists'

    useEffect(() => {
        fetch(artistAPI)
        .then(res => res.json())
        .then((artistProfiles) => {
            const filteredArtistProfileList = artistProfiles.filter((artist) => artist.id !== currentUser?.id);
            setArtistData(filteredArtistProfileList)
        })
    }, [currentUser]);

    const artistCards =  artistData.map(artist => {
       return <ArtistCard artist={artist} key={artist.id} showFavs={showFavs}/>
    })

    function showFavs() {
        return <div>helloooo</div>
    }

    return (
        <>
        <div className="ui menu">
        <div className="header item">ArtWalks</div>
        <Link to= "/home" className="item">Home</Link>
        <Link to= "/" className="item">Log Out</Link>
        </div>

    <Segment>
    <Grid columns={3}>
      <Grid.Column>
       {artistCards}
      </Grid.Column>
      <Grid.Column>
       <h1 className="ui block header">Artist Component</h1>
      </Grid.Column>
    </Grid>
      </Segment>
        </>
    )
}

export default ArtistCollection;