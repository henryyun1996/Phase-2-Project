import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Grid, Segment } from "semantic-ui-react";

function OwnWork({ currentUser }) {
  const [favorited, setFavorited] = useState({ favorites: [] });

  useEffect(() => {
    fetch(`http://localhost:3000/artists/${currentUser.id}`)
    .then(res => res.json())
    .then(setFavorited)
    .catch(error => console.log('Error fetching favorites:', error))
  }, [])

  const userFavoritesList = favorited.favorites
  
  const listFavorites = userFavoritesList.map((favorite) => {
    return (
      <div key={favorite}>
        <div className="center aligned content">
          <span className="ui header">Title: {favorite}</span>
        </div>
      </div>
    )
  })
    
    return (
    <>
    <div className="ui menu">
        <div className="header item">ArtWalks</div>
        <Link to= "/home" className="item">Home</Link>
        <Link to= "/" className="item">Log Out</Link>
    </div>
    <div>
    <h1>Profile</h1>
    <br/>
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
       <h2>My Favorites:</h2>
            {userFavoritesList.length > 0 ? (
              listFavorites
            ) : (
              <p>No favorites found.</p>
            )}
      </Grid.Column>
      <Grid.Column>
        <h2>Following:</h2>
      </Grid.Column>
      </Grid>
      </Segment>
    </div>
    </>
    )  
}

export default OwnWork;