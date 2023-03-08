import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Buttons from "./Buttons";
import Gallery from "./Gallery";

function HomePage({ currentUser }) {
    const [page, setPage] = useState("/");
    const history = useHistory();
    
    function handleChangePage(path) {
      setPage(path);
      history.push(path);
    }

  console.log(page);
    
    
    return (
      <>
       <div className="ui menu">
        <div className="header item">ArtWalks</div>
        <Link to= "/" className="item" 
        setCurrentUser=''>Log Out</Link>
      </div>
      <div>
        <h1>{currentUser ? (`Hello ${currentUser && currentUser.name}!`) : "Welcome!" }</h1>
        <Buttons onChangePage={handleChangePage} />
        <br/>
        <Gallery />
      </div>
      </>
    );
  }
  
  export default HomePage;
