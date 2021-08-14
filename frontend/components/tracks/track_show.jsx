import React from 'react';

import Waveform from '../waveform/waveform';

class TrackShow extends React.Component{
    constructor(props){
        super(props)

    }


    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
    }

    render(){
        const {track, currentUser, artistId} = this.props;
        
        if ((track === undefined)){
            return null
        }else {
            return (
                <> 
                    <img id="track-show-image" src={track.photoUrl} alt={track.title} />
                        <Waveform track={track}/>
                    <span id="track-show-title">{track.title}</span>
                </>
            )
        }
    }
}


export default TrackShow