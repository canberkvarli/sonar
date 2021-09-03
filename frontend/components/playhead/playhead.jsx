import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

class Playhead extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isPlaying: true
        }

    }

    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
    }


    render() {

        console.log(this.props)
        console.log(this.props.tracks)

        let temp;
        this.state.isPlaying ? temp = 'container-playhead-passive' : 'container-playhead-active'

        if(this.props.tracks === undefined){
            return null
        }else{
            
            return (
                
                <div>
                    {this.props.tracks.map(track => (
                        <footer className={temp}>
                            <AudioPlayer 
                            // src={track.audioUrl}
                            />
                        </footer>
                    ))}
                </div>
            )
        }
    }
}


export default Playhead;