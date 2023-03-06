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
            <button onClick={handleArtistCollectionClick}>Artist Collection Component</button>
            <button onClick={handleOwnWorkClick}>Own Work Component</button>
        </div>
    );
}

export default Buttons;