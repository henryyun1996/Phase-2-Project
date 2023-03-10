import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import banner from "../images/welcome.png"


function LogIn({ setCurrentUser, artists, username, setUsername, password, setPassword }) {
  const history = useHistory();

  // console.log(artists)

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
    <>
    <img alt='' src={banner} className= "ui fluid image"/>
    <Segment secondary style={{ height: '50vh' }}>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column verticalAlign='middle' >
          <Form>
          <h1>Welcome Back!</h1>
          <p>We're excited to see you again</p>
          <br/>
            <Form.Field >
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
              <Button 
              className='ui like button'
              onClick={handleLogInClick}>Log In</Button>
              <br/>
          </Form>
        </Grid.Column>
        <Grid.Column verticalAlign='middle' >
          <div >
            <h1>Let's get you started!</h1>
            <p>We'll get you looking at amazing art pieces in no time</p>
            <Button 
            className='ui like button'
            onClick={handleCreateNewAccountClick}>Create New Account</Button>
          </div>
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
    </>
  );
}

export default LogIn;