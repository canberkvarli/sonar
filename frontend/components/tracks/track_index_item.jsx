import React from 'react';
import { Link } from 'react-router-dom';


const TrackIndexItem = (props) => 
    {

       console.log(props)
        // debugger
        return(
        <div className="track-index-item">
            <img className="track-photos" src={props.track.photoUrl} />
            <span>
                <Link to={`/tracks/${props.track.artistId }`} className="track-title">{props.track.title}</Link>
            </span>
            <br />
        </div> 
        ) 
    }

export default TrackIndexItem