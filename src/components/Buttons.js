import React from "react";
import { Link } from "react-router-dom";

function Buttons({ onChangePage }) {

    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }

    return (
        <div>
            <Link class="ui button" to="/artist-collection">Artist Collection Component</Link>
            <Link class="ui button" to="/creations">Own Work Component</Link>
        </div>
    );
}

export default Buttons;