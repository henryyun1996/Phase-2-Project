import React from "react";

function Buttons({ onChangePage }) {
    function handleArtistCollectionClick(e) {
        onChangePage("/artist-collection");
    }

    function handleOwnWorkClick(e) {
        onChangePage("/creations");
    }

    return (
        <div className="ui floated left">
            <button className= "ui fav left floated button" onClick={handleArtistCollectionClick}>Find Friends</button>
            <button className= "ui fav left floated button" onClick={handleOwnWorkClick}>My Profile</button>
        </div>
    );
}

export default Buttons;

// in charge of the user navigating to two different components: ArtistCollection & OwnWork