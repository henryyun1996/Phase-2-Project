import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// import { Sticky } from "semantic-ui-react";
import Buttons from "./Buttons";
import CreationCard from "./CreationCard";

const galleryAPI = 'http://localhost:3000/artwork';

function HomePage({ currentUser, artists, setArtists }) {
  const [page, setPage] = useState("/");
  const [galleryData, setGalleryData] = useState([]);
  const [filteredGalleryData, setFilteredGalleryData] = useState([]);
  const history = useHistory();

  console.log(page);

  useEffect(() => {
    fetch(galleryAPI)
      .then(res => res.json())
      .then((artPieces) => {
        setGalleryData(artPieces);
        setFilteredGalleryData(artPieces);
      });
  }, []);

  function handleChangePage(path) {
    setPage(path);
    history.push(path);
  }

  function updateLikes(likedCreation) {
    const updatedCreation = galleryData.map((creation) => creation.id === likedCreation.id ? likedCreation: creation);
    setGalleryData(updatedCreation);
  }

  function handleSearch(searchText) {
    const searchGallery = galleryData.filter((creation) => creation.title.toLowerCase().includes(searchText.toLowerCase()) || creation.artist.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredGalleryData(searchGallery);
  }

  const creations = filteredGalleryData.map((creation) => (
    <CreationCard 
      key={creation.id}
      creation={creation}
      updateLikes={updateLikes}
      artists={artists}
      setArtists={setArtists}
      currentUser={currentUser}
    />
  ));

  return (
    <>
      <div className="ui menu">
        <div className="header item">ArtWalks</div>
        <Link to="/" className="item" setCurrentUser="">
          Log Out
        </Link>
      </div>
        <div>
        <h1 className="ui left aligned header maroon">{currentUser ? `Hello ${currentUser && currentUser.name}!` : "Welcome!"}</h1>
        <Buttons onChangePage={handleChangePage}/>
        <br/>
        <div className="ui dividing header maroon">
          <h1>Gallery
          <div className="sub header">Click on an art piece to learn more about it</div>
          </h1>
          <br/>
      </div>
      <div onSubmit={handleSearch} className="ui fluid action input">
          <input 
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="ui fav button">Search</div>
        </div>
        <br/>
        <div className="ui grid container">{creations}</div>
      </div>
    </>
  )
}

export default HomePage;