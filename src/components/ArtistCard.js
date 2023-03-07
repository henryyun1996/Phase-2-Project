import React from "react";
import { Card, Image } from "semantic-ui-react";

function ArtistCard({ artist, onChangePage }) {

function artistCardClick(e) {
e.preventDefault();
console.log(`/${artist.name}`)



}
    return (
        <Card className="ui four wide column">
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
          <button onClick={artistCardClick} className={'ui button'}>
            Follow
          </button>
          <button className={'ui button'}>
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