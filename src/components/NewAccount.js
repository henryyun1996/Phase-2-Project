import React, { useState } from "react";
import { useHistory} from "react-router-dom";

function NewAccount({ API, setArtists, artists }) {
    const [name, setName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const newArtistDataObj = {
            name,
            username: newUsername,
            password: newPassword
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
        setNewUsername("");
        setNewPassword("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign-up!</h1>
                Name: <input 
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
                <br />
                <button>Sign-Up!</button>
            </form>
        </>
    )
}

export default NewAccount;