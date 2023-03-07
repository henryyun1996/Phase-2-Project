import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function CreationCard({creation, updateLikes}) {

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

    const [liked, setLiked] = useState(true)

    function toggleLiked() {
        setLiked(!liked)
    }
    return (
     <div>
        <img src={creation.image} alt={creation.title} />
        <h4>Title: {creation.title}</h4>
        <h4>Artist: {creation.artist}</h4>
     {liked ? <Button 
    onClick={handleLike}
    color='blue'
    content='Likes'
    icon='heart'
    label={{ basic: true, color: 'blue', pointing: 'left', content: creation.likes  }}
    /> :  <Button 
    className="ui disabled button"
    color='blue'
    content='Thanks!'
    icon='heart'
    label={{ basic: true, color: 'blue', pointing: 'left', content: creation.likes  }}
    />}
     </div>

    )
}
