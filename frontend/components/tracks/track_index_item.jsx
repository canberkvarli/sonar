import React from 'react';



const TrackIndexItem = ({title, username}) => 
    (
        <div>
            <span id="track-title">{title}</span>
            <br />
            <span id="track-username">{username}</span>
        </div>  
    )

export default TrackIndexItem