import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

function ArtistCard({ artist, onChangePage }) {

const handleViewClick =() => {
onChangePage(`/${artist.name}`)
}

const [following ,setFollowing] = useState(true)
const toggleFollow = () => {
    setFollowing(!following);
}
    return (
        <Card className="ui four wide relaxed column">
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
    )
}

export default ArtistCard

//  <Card
// image='/images/avatar/large/elliot.jpg'
// header='Elliot Baker'
// meta='Friend'
// description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
// extra={extra}
// />