import React from 'react';

import AudioPlayer from 'react-h5-audio-player';


const TrackIndexItem = (props) => 
    {
        console.log(props);
        return(
        <div className="track-index-item">
            <img className="track-photos" src={props.track.photoUrl} />
            <span className="track-title">{props.track.title}</span>
            <audio src={props.track.audioUrl}>EXAMPLE</audio>
            <br />
        </div> 
        ) 
    }

export default TrackIndexItem