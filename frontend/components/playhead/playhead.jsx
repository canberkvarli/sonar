import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

class Playhead extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isPlaying: false,
            track: this.props.track
        }
        
    }

    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
    }


    render() {

        // console.log(this.props.tracks)

        let temp;
        this.state.isPlaying ? temp = 'container-playhead-passive' : 'container-playhead-active'
        console.log(this.props)

        if(this.props.tracks === undefined){
            return null
        }else{
            
            return (
                <div>         
                        {/* <footer className={temp}>
                            <AudioPlayer 
                            // src={this.props.track.audioUrl}
                            />
                        </footer> */}
                </div>
            )
        }
    }
}


export default Playhead;