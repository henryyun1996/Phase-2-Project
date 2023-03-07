import React from 'react';
import { useHistory } from 'react-router-dom';


function LogIn({ setCurrentUser, artists, username, setUsername, password, setPassword }) {
  const history = useHistory();

  function handleLogInClick(e) {
    e.preventDefault();
    const artistLogIn = artists.find(artist => artist.username === username && artist.password === password);
    if (artistLogIn) {
      // Set the current user and navigate to the HomePage component if the username and password match
      setCurrentUser(artistLogIn);
      history.push('/home');
    } else {
      // Show an error message if the username and password don't match
      alert('Username and password don\'t match - please try again');
    }
  }

  function handleCreateNewAccountClick() {
    history.push('/new-account');
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogInClick}>Log In</button>
      <button onClick={handleCreateNewAccountClick}>Create New Account</button>
    </div>
  );
}

export default LogIn;