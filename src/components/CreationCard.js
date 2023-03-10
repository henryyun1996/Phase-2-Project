import { useState } from "react";
import { Button } from "semantic-ui-react";

function Front({ creation }) {
    return (
        <div>
            <img src={creation.image} alt={creation.title} />
        </div>
    )
}

function Back({ creation }) {
    return (
        <div>
            <h4>{creation.summary}</h4>
        </div>
    )
}

function CreationCard({ creation, updateLikes, artists, setArtists, currentUser }) {
    const [showFront, setShowFront] = useState( true );
    const [favorited, setFavorited] = useState(false);
    const [liked, setLiked] = useState(true)

    console.log(favorited);

    function handleLike() {
        fetch ( `http://localhost:3000/artwork/${creation.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likes: creation.likes += 1, 
            })
        })
        .then(res => res.json())
        .then(updateLikes(creation))
        toggleLiked()
    }
    function toggleCard() {
        setShowFront(showFront => !showFront)
    }

    function toggleLiked() {
        setLiked(liked => !liked)
    }

    function handleFavorites() {
        const updatedArtists = artists.map((artist) => {
          if (artist.id === currentUser.id) {
            return {
              ...artist,
              favorites: [
                ...artist.favorites,
                { title: creation.title, image: creation.image },
              ],
            };
          }
          return artist;
        });

        fetch(`http://localhost:3000/artists/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                favorites: updatedArtists.find(artist => artist.id === currentUser.id).favorites
            })
        })
            .then(res => res.json())
            .then(updatedArtist => {
                setArtists(artists => {
                    return artists.map(artist => {
                        if(artist.id === updatedArtist.id) {
                            return updatedArtist
                        }
                        return artist
                    })
                })
                setFavorited(true)
            })
            .catch(err => console.log(err))
    }

    return (
    <div className="ui five wide column image">
        <div onClick={ toggleCard }>
            {showFront ? <Front creation={creation} /> : <Back creation={creation} />}
        </div>
        <h4>Title: {creation.title}</h4>
        <h4>Artist: {creation.artist}</h4>
    {liked ? <Button 
        className="ui like button"
        size='tiny'
        onClick={handleLike}
        content='Likes'
        icon='heart'
        label={{ basic: true, color: 'blue', pointing: 'left', content: creation.likes  }}
    /> :  <Button 
        className="ui disabled button"
        color='red'
        content='Thanks!'
        icon='heart'
        label={{ basic: true, color: 'blue', pointing: 'left', content: creation.likes  }}
    />}
    <Button 
        size='tiny'
        className="ui fav button"
        content='Add to Favorites'
        icon='favorite'
        onClick={handleFavorites}
    />
    </div>

    )
}

export default CreationCard;