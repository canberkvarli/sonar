import React from 'react';

import Waveform from '../waveform/waveform';

class TrackShow extends React.Component{
    constructor(props){
        super(props)

        console.log(props);
    }


    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
    }

    render(){
        const {track, currentUser} = this.props;
 

        if ((track === undefined)){
            return null
        }else if(currentUser){
            return (
                <> 
                    <img id="track-show-image" src={track.photoUrl} alt="" />
                    <Waveform track={track}/>
                    <span id="track-show-title">{track.title}</span>
                </>
            )
        }

        
    }
}


export default TrackShow