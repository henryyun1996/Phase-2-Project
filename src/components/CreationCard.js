import { useState } from "react";
import { Button } from "semantic-ui-react";

function Front({ creation }) {
    return (
        <div>
            <img src={creation.image} alt={creation.title} className="gallery bordered image"/>
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

export default function CreationCard({creation, updateLikes, updateFavs}) {
const [liked, setLiked] = useState(true)    
const[showFront, setShowFront] = useState( true );
const [favorited, setFavorited] = useState(false)

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


    function handleFav() {
        fetch ( `http://localhost:3000/artwork/${creation.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                favorited: true, 
            })
        })
        .then(res => res.json())
        .then(toggleFavorite())
    }

    function toggleFavorite() {
        setFavorited(!favorited)
    }
   
    function toggleLiked() {
        setLiked(!liked)
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
        label={{ basic: true, pointing: 'left', content: creation.likes  }}
    /> :  <Button 
        className="ui disabled button"
        size='tiny'
        color='red'
        content='Thanks!'
        icon='heart'
        label={{ basic: true, color: 'red', pointing: 'left', content: creation.likes  }}
    />}
    {creation.favorited || favorited === true ? <Button 
    size='tiny'
    content='Added to Favorites'
    icon='favorite'
    />  : <Button 
    size='tiny'
    onClick={handleFav}
    className="ui fav button"
    content='Add to Favorites'
    icon='favorite'
    />}
     </div>

    )
}
