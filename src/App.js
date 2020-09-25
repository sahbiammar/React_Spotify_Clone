import React, { useEffect, useState } from 'react'; 
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();


function App() {
  
  const [{ user, token }, dispatch] = useStateValue();


  // Run Code based on a given condition 
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";   // hetha besh naamlou clean Url
    let _token = hash.access_token;

    if (_token) {   // lenna khazenna el token fel balsa
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token); // star hetha houwa eli yakhlik thez o tjib eli t7eb mel spotify api

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });


      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("03PWitUe2WwTwHJ8B6VhyT").then((response) =>
        dispatch({
          type: "SET_DAILY_MUSIC",
          daily_music: response,
        })
      );


    }
  }, []);
  

  return (
    <div className="app"> 
      {
        token ? 
          <Player  spotify={spotify}/> : 
          <Login /> 
      } 
    </div>
  );
}

export default App;
