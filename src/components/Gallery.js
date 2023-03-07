import { useEffect, useState } from "react"
import CreationCard from "./CreationCard"
const galleryAPI = 'http://localhost:3000/artwork'

export default function Gallery () {
const [galleryData, setGalleryData] = useState([])


    useEffect(() => {
        fetch(galleryAPI)
        .then(res => res.json())
        .then(setGalleryData)
    }, [])
    
    const creations = galleryData
    .map(creation => {
        return <CreationCard creation={creation} key={creation.id} updateLikes={updateLikes} />
    })

    function updateLikes(likedCreation) {
        const updatedCreation = galleryData.map((creation) => 
        creation.id === likedCreation.id ? likedCreation : creation)
        setGalleryData(updatedCreation)
    }
    

    return (
        <>
        <div>
        <h1 className="ui block header">Gallery</h1>
        </div>
        <div className="ui fluid action input">
            <input type="text" placeholder="Search..." />
            <div className="ui button">Search</div>
        </div>
        <br/>
        <div className="ui grid centered">
        {creations}
        </div>
        </>
    )
}