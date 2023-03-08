import { useEffect, useState } from "react"
import CreationCard from "./CreationCard"
const galleryAPI = 'http://localhost:3000/artwork'

export default function Gallery () {
const [galleryData, setGalleryData] = useState([])
const [filteredGalleryData, setFilteredGalleryData] = useState([]);


    useEffect(() => {
        fetch(galleryAPI)
        .then(res => res.json())
        .then((artPieces) => {
            setGalleryData(artPieces);
            setFilteredGalleryData(artPieces);
        })
    }, [setGalleryData])
    
    const creations = filteredGalleryData.map(creation => (
        <CreationCard creation={creation} key={creation.id} updateLikes={updateLikes} updateFavs={updateFavs}/>
      ));

    function updateLikes(likedCreation) {
        const updatedCreation = galleryData.map((creation) => 
        creation.id === likedCreation.id ? likedCreation : creation)
        setGalleryData(updatedCreation)
    }

    function updateFavs(favedCreations) {
        const favedItems = galleryData.map((creation) =>
        creations.favorited === true ? favedCreations : creation)
        setGalleryData(favedItems)
    }

    function handleSearch(searchText) {
        const searchGallery = galleryData.filter((creation) =>
          creation.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredGalleryData(searchGallery);
      }

    return (
        <>
        <div>
        <h1 className="ui block header">Gallery</h1>
        </div>
        <div onSubmit={handleSearch} className="ui fluid action input" >
            <input type="text" placeholder="Search..." onChange={e => handleSearch(e.target.value)} />
            <div className="ui button">Search</div>
        </div>
        <br/>
        <div className="ui grid container">
        {creations}
        </div>
        </>
    )
}