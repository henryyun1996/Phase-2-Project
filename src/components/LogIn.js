import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


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
    setUsername("");
    setPassword("");
  }

  function handleCreateNewAccountClick() {
    history.push('/new-account');
  }

  return (
    <Segment placeholder verticalAlign='middle' style={{ height: '100vh' }}>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' columns={2} relaxed='very' stackable>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form>
          <h1>Welcome Back!</h1>
          <p>We're excited to see you again</p>
          <br/>
          <div>
            <Form.Field>
              <label style={{ textAlign: 'left' }}>Username:</label>
              <Form.Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Field>
            <br/>
            <Form.Field>
              <label style={{ textAlign: 'left' }}>Password:</label> 
              <Form.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </Form.Field>
              <br/>
              <Button onClick={handleLogInClick}>Log In</Button>
              <br/>
          </div>
          </Form>
        </Grid.Column>
        <Grid.Column verticalAlign='middle' style={{ backgroundImage: 'url(https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-zion-national-park.jpg)', backgroundSize: 'cover', padding: '10rem' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <h1>Let's get you started!</h1>
            <p>Signing up takes 1 minute!</p>
            <Button onClick={handleCreateNewAccountClick}>Create New Account</Button>
          </div>
        </Grid.Column>

            {/* <Button onClick={handleCreateNewAccountClick}>Create New Account</Button>
          </div>
        </Grid.Column> */}
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
  );
}

export default LogIn;