import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import { Button, Form, Segment } from 'semantic-ui-react'
import banner from "../images/welcome.png"

function NewAccount({ API, artists, setArtists, setUsername, setPassword }) {
    const [name, setName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [bio, setBio] = useState("");
    const history = useHistory();

    console.log(name, newUsername,newPassword, bio )

    function handleSubmit(e) {
        e.preventDefault();
        const newArtistDataObj = {
            name,
            username: newUsername,
            password: newPassword,
            bio,
            favorites: [{
                "title":"",
                "image":""
            }]
        };
        fetch(API, {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArtistDataObj)
        })
        .then(res => res.json())
        .then(newArtist => {
            setArtists([...artists, newArtist])
            window.alert("Thank you for signing up! You will be redirected to the sign-in page now!");
            history.push("/");
        })

        setName("");
        setUsername("");
        setPassword("");
        setNewUsername("");
        setNewPassword("");
        setBio("");
    }

    return (
     <>
     <img alt='' src={banner} className= "ui fluid image"/> 
     <Segment secondary textAlign='center'className="">
        <Form className='ui small form'onSubmit={handleSubmit}>
        <Form.Field inline >
            <label className=" ui center aligned"> &nbsp; &nbsp; &nbsp; &nbsp;Name </label>
            <input placeholder="Name.." 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </Form.Field>
        <Form.Field inline >
            <label className=" ui center aligned">Username</label>
            <input placeholder="Username.." 
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}/>
        </Form.Field>
        <Form.Field inline >
            <label>Password</label>
             <input type='password' 
             value={newPassword}
             placeholder="Password.." 
            onChange={(e) => setNewPassword(e.target.value)}/>
        </Form.Field>
        <Form.Field inline>
            <label>Favorite Style?</label>
            <input placeholder="What's your art style?" 
            value={bio}
            onChange={(e) => setBio(e.target.value)}/>
        </Form.Field>
        <Button className="ui like button">Sign-Up!</Button>
    </Form>
        </Segment>
    </>
    )
}

export default NewAccount;