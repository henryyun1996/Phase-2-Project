import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";

function OwnWork() {
  const [favorited, setFavorited] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/artwork")
    .then(res => res.json())
    .then(artwork => filterFavorites(artwork))
  }, [])
    
  function filterFavorites(artwork) {
    const onlyFavs = artwork.filter((fav) => 
    fav.favorited === true)
    setFavorited(onlyFavs)
  }
  console.log(favorited)
  const favoritesList = favorited.map ((creation) => {
  return (
    <>
     <div className="center aligned content">
        <span className="ui header">Title: {creation.title}</span>
        <br/>
        <span className="header">Artist: {creation.artist}</span>
      </div> 
      <div className="ui medium image">
        <img src={creation.image} alt={creation.title} className="gallery bordered image"/>
      </div>
    <button className="ui like button">Remove from favorites</button>
    <Divider/></>
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
    <Grid columns={1} relaxed='very'>
      <Grid.Column>
       <h2>My Favorites</h2>
            {favoritesList}
      </Grid.Column>
      {/* <Grid.Column>
       <h2>Following</h2>
       <ul>
            <li>following</li>
            <li>following</li>
            <li>following</li>
            <li>following</li>
        </ul>
      </Grid.Column> */}
      </Grid>
      </Segment>
    </div>
    </>
    )  
}

export default OwnWork;