import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';

class Playhead extends React.Component {
    constructor(props){
        super(props)


    }
    render() {

        const { tracks } = this.props;
        console.log(tracks)
        return (
            <div>
                <footer className="playhead-footer">

                </footer>
            </div>
        )
    }
}


export default Playhead;