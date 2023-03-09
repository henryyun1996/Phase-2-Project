import {React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ArtistCard from "./ArtistCard";


function ArtistCollection( {setViewCreations, currentUser }) {
    const [artistData, setArtistData] = useState([])
    const [selectedArtist, setSelectedArtist] = useState(null);
    const artistAPI = 'http://localhost:3000/artists'

    useEffect(() => {
        fetch(artistAPI)
        .then(res => res.json())
        .then((artistProfiles) => {
            const filteredArtistProfileList = artistProfiles.filter((artist) => artist.id !== currentUser?.id);
            setArtistData(filteredArtistProfileList)
        })
    }, [currentUser]);

    // const chosenFavorites = artistData.map((favorite) => {
    //     console.log(favorite.favorites)
    // })

    const artistCards =  artistData.map(artist => {
       return (
        <ArtistCard 
            key={artist.id}
            artist={artist} 
            showFavs={() => setSelectedArtist(artist)}
        />
       )
    })

    // function showFavs() {
    //     return <div>helloooo</div>
    // }

    return (
        <>
        <div className="ui menu">
        <div className="header item">ArtWalks</div>
        <Link to= "/home" className="item">Home</Link>
        <Link to= "/" className="item">Log Out</Link>
        </div>
        <div>
        <h1 className="ui block header">Artist Component</h1>
        </div>
        <br/>
        <div >
            <Grid columns={16} relaxed='very'>
                <Grid.Column width={5}>{artistCards}</Grid.Column>
                <Grid.Column width={10} style={{ border: '1px solid black', borderRadius: '10px' }}>
                    <h1>Favorites: </h1>
                    {selectedArtist && selectedArtist.favorites.length >0 ? (
                        selectedArtist && selectedArtist.favorites.map((fav, index) => (
                            <p key={index}>Title: {fav}</p>
                        ))
                    ) : (
                        <h1>You don't have any favorite pieces yet!</h1>
                    )}
                </Grid.Column>
            </Grid>
        </div>
        </>
    )
}

export default ArtistCollection;