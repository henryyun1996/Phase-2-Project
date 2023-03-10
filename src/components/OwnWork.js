import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Grid, Segment } from "semantic-ui-react";

function OwnWork({ currentUser }) {
  const [favorited, setFavorited] = useState({ favorites: [{ title: "", image: ""}] });

  useEffect(() => {
    fetch(`http://localhost:3000/artists/${currentUser.id}`)
    .then(res => res.json())
    .then(favoritedInfo => setFavorited(favoritedInfo))
    .catch(error => console.log('Error fetching favorites:', error))
  }, [])

  const userFavoritesList = favorited.favorites
  
  const listFavorites = userFavoritesList.map((favorite) => {
    return (
      <div key={favorite} >
          <div className="ui image large">
            <img src={favorite.image} alt={favorite.title} className=' gallery bordered image' />
            <h4>{favorite.title}</h4>
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
    <h1 className="ui block header">{currentUser.name}'s Profile</h1>
    <br/>
    <div className="">
       <h2 >My Favorites:</h2>
            {userFavoritesList.length > 0 ? (
              listFavorites
            ) : (
              <p>No favorites found.</p>
            )}
      </div>
    </div>
    </>
    )  
}

export default OwnWork;