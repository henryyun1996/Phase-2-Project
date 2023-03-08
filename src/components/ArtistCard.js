import React, { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Card } from "semantic-ui-react";

function ArtistCard({ artist }) {

// const [page, setPage] = useState("/");
// const history = useHistory();



// function handleChangePage(path) {
//     setPage(path);
//     history.push(path);
// }
      

// const handleViewClick =() => {
// handleChangePage(`/gallery/${artist.name}`)
// console.log(`/${artist.name}`)
// }

const [following ,setFollowing] = useState(true)
const toggleFollow = () => {
    setFollowing(!following);
}

function toggleCard() {
  console.log('Toggling card')
}

    return (
    <Card.Group className="ui grid">
        <Card >
        <Card.Content>
          <Card.Header>
            {artist.name}
          </Card.Header>
          <Card.Description>
            Art Style: {artist.bio}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {following ? (<button onClick={toggleFollow} className={'ui primary button'}>
            Follow
          </button>) : (<button onClick={toggleFollow} className={'ui button'}>
            Following
          </button>)}
          <button className={'ui button'} onClick={toggleCard}>
            View Favorites
          </button>
        </Card.Content>
      </Card>
    </Card.Group>

    )
}

export default ArtistCard

