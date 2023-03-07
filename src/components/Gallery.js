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

    console.log(galleryData)
    
    const creations = galleryData.map(creation => {
        return <CreationCard creation={creation} key={creation.id} />
    })
    return (
        <>
        <div>
        <h1 className="ui block header">Gallery</h1>
        </div>
        <div className="ui grid container">
        {creations}
        </div>
        </>
    )
}