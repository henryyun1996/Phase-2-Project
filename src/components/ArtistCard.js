import React from "react";

function ArtistCard({ artist }) {
    return (
       <div className="ui four wide column">
        <h4>{artist.name}</h4>
        <h4>{artist.bio}</h4>
        <button className="ui button"> View Creations</button>
       </div>
    )
}

export default ArtistCard