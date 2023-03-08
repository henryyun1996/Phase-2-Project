import React from "react";
import { Grid, Segment } from "semantic-ui-react";

function OwnWork() {
    

    return (
    <div>
    <h1>Profile</h1>
    <br/>
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
       <h2>My Favorites</h2>
        <ul>
            <li>favorites</li>
            <li>favorites</li>
            <li>favorites</li>
            <li>favorites</li>
        </ul>
      </Grid.Column>
      <Grid.Column>
       <h2>Following</h2>
       <ul>
            <li>following</li>
            <li>following</li>
            <li>following</li>
            <li>following</li>
        </ul>
      </Grid.Column>
      </Grid>
      </Segment>
    </div>
    )  
}

export default OwnWork;