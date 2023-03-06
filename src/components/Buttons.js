import React from "react";
import { Link } from "react-router-dom";

function Buttons({ onChangePage }) {
    function handleArtistCollectionClick(e) {
        onChangePage("/artist-collection");
    }

    function handleOwnWorkClick(e) {
        onChangePage("/creations");
    }

    return (
        <div>
            <button class="ui button" onClick={handleArtistCollectionClick}>Artist Collection Component</button>
            <button class="ui button" onClick={handleOwnWorkClick}>Own Work Component</button>
        </div>
    );
}

export default Buttons;