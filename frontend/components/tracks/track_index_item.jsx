import React from 'react';


const TrackIndexItem = (props) => 
    {
        console.log(props)
        return(
        <div className="track-index-item">
            <img className="track-photo" src={props.track.photoUrl} />
            <span className="track-title">{props.track.title}</span>
            <br />
        </div> 
        ) 
    }

export default TrackIndexItem