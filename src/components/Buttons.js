import React from "react";

function Buttons({ onChangePage }) {
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }

    return (
        <div>
            <button onClick={handleLinkClick} href="/artist-collection">Artist Collection Component</button>
            <button onClick={handleLinkClick} href="/creations">Own Work Component</button>
        </div>
    );
}

export default Buttons;