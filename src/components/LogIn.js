import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleLogInClick(e) {
    e.preventDefault();
    if (username === '' && password === '') {
      // Navigate to the HomePage component if the username and password match
      history.push('/home');
    } else {
      // Show an error message if the username and password don't match
      alert('Username and password don\'t match - please try again');
    }
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
    </div>
  );
}

export default LogIn;