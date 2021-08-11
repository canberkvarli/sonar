import React from 'react';
import { Link } from 'react-router-dom';


const TrackIndexItem = (props) => 
    {

       
        // debugger
        return(
        <div className="track-index-item">
            <img className="track-photos" src={props.track.photoUrl} />
            <Link to={`/tracks/${props.track.artistId }`} className="track-title">{props.track.title}</Link>
            <br />
        </div> 
        ) 
    }

export default TrackIndexItem