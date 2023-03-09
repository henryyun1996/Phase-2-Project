import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

function NewAccount({ API, artists, setArtists, setUsername, setPassword }) {
    const [name, setName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [bio, setBio] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const newArtistDataObj = {
            name,
            username: newUsername,
            password: newPassword,
            bio,
            favorites: []
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
        <Segment placeholder>
            <Grid relaxed='very' columns={1}>
                <Grid.Column>
                    <Form onSubmit={handleSubmit}>
                        <h1>Sign-up!</h1>
                            Name: <Form.Input 
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                    <br/>
                            Username: <input 
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                            />
                    <br/>
                            Password: <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                    <br/>
                            Bio: <input 
                                type="text"
                                name="bio"
                                placeholder="what's your art style?"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                    <br/>
                    <Button>Sign-Up!</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default NewAccount;