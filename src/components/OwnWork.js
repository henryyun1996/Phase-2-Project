import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";

function OwnWork({ currentUser }) {
  const [favorited, setFavorited] = useState({ favorites: [{ title: "", image: ""}] });

  useEffect(() => {
    fetch(`http://localhost:3000/artists/${currentUser.id}`)
    .then(res => res.json())
    .then(favoritedInfo => setFavorited(favoritedInfo))
    .catch(error => console.log('Error fetching favorites:', error))
  })

  const userFavoritesList = favorited.favorites
  
  const listFavorites = userFavoritesList.map((favorite) => {
    return (
        <Grid.Column key={favorite.title}>
          <h4>Title: {favorite.title}</h4>
          <div>
            <img alt={favorite.title} src={favorite.image} className='gallery bordered image'/>
          </div>
        </Grid.Column>
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
    <h1 className="ui block header lightBrown">{currentUser.name}'s Profile</h1>
    <br/>
    <Segment>
    <Grid columns={3} relaxed='very'>
       <h2 className="ui right floated header maroon">My Favorites:</h2>
      <Grid.Row style={{ textAlign: 'center' }}>
            {userFavoritesList.length > 0 ? (
              listFavorites
            ) : (
              <p>No favorites found.</p>
            )}
      </Grid.Row>
      </Grid>
      </Segment>
    </div>
    </>
    )  
}

export default OwnWork;