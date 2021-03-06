import React from "react";
import "./Body.css"; 
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({spotify}) {
  const [{ daily_music }, dispatch] = useStateValue();

  return ( 
    <div className="body">
        <Header spotify={spotify}/>

        <div className="body__info">
            <img src={daily_music?.images[0].url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>{daily_music?.description}</p>
            </div>
        </div>

        <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon
                className="body__shuffle" 
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div> 


            {daily_music?.tracks.items.map((item) => (
              <SongRow  track={item.track} />
            ))}
        </div>


    </div>
  );
}

export default Body;
