import React from 'react';


const TrackIndexItem = (props) => 
    {
        
        return(

        <div>
            <span id="track-title">Title: {props.track.title}</span>
            <br />
        </div> 
        ) 
    }

export default TrackIndexItem