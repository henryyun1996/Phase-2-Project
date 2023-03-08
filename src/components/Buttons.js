import React from "react";

function Buttons({ onChangePage }) {
    function handleArtistCollectionClick(e) {
        onChangePage("/artist-collection");
    }

    function handleOwnWorkClick(e) {
        onChangePage("/creations");
    }

    return (
        <div>
            <button className= "ui button" onClick={handleArtistCollectionClick}>Find Friends</button>
            <button className= "ui button" onClick={handleOwnWorkClick}>My Profile</button>
        </div>
    );
}

export default Buttons;