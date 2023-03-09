import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ArtistCard({ artist, showFavs }) {

  const [following ,setFollowing] = useState(true)
  const toggleFollow = () => {
    setFollowing(!following);
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
          {following ? (<button onClick={toggleFollow} className={'ui like button'}>
            Follow
          </button>) : (<button onClick={toggleFollow} className={'ui button'}>
            Following
          </button>)}
          <button className={'ui fav button'} onClick={showFavs}>
            View Favorites
          </button>
        </Card.Content>
      </Card>
    </Card.Group>

    )
}

export default ArtistCard