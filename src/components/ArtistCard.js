import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Card, Image } from "semantic-ui-react";

function ArtistCard({ artist }) {

const [page, setPage] = useState("/");
const history = useHistory();



function handleChangePage(path) {
    setPage(path);
    history.push(path);
}
      

const handleViewClick =() => {
handleChangePage(`/gallery/${artist.name}`)
console.log(`/${artist.name}`)
}

const [following ,setFollowing] = useState(true)
const toggleFollow = () => {
    setFollowing(!following);
}
    return (
    <Card.Group>
        <Card className="ui four wide column centered ">
        <Image src={artist.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {artist.name}
          </Card.Header>
          <Card.Description>
            {artist.bio}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {following ? (<button onClick={toggleFollow} className={'ui primary button'}>
            Follow
          </button>) : (<button onClick={toggleFollow} className={'ui button'}>
            Following
          </button>)}
          <button className={'ui button'} onClick={handleViewClick}>
            View Creations
          </button>
        </Card.Content>
      </Card>
    </Card.Group>

    )
}

export default ArtistCard

