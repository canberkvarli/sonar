import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

class Playhead extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isPlaying: false
        }

    }


    render() {

        const { tracks } = this.props;
        console.log(tracks)

        let temp;
        if(this.state.isPlaying){
            temp = 'container-playhead-passive'
        }else{
            temp = 'container-playhead-active'
        }
        return (

            <div>
                <footer className={temp}>
                    <AudioPlayer 
                    src="https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
                    />
                </footer>
            </div>
        )
    }
}


export default Playhead;