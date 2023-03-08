import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function CreationCard({creation, updateLikes, updateFavs}) {
const [liked, setLiked] = useState(true)
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
        .then(updateFavs(creation))
    }

    function toggleLiked() {
        setLiked(!liked)
    }
    return (
     <div className="ui five wide column image">
        <img src={creation.image} alt={creation.title} className='gallery bordered image' />
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
    size='tiny' 
    className="ui disabled button"
    color='red'
    content='Thanks!'
    icon='heart'
    label={{ basic: true, pointing: 'left', content: creation.likes  }}
    />}
    {creation.favorited === true ? <Button 
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
