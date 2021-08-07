import React from 'react';


const TrackIndexItem = (props) => 
    {
        console.log(props)
        return(
        <div>
            <img src={props.track.photoUrl} alt="" />
            <span id="track-title">Title: {props.track.title}</span>
            <br />
        </div> 
        ) 
    }

export default TrackIndexItem