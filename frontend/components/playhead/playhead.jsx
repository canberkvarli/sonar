import React from 'react'
import AudioPlayer from 'react-h5-audio-player';

class Playhead extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isPlaying: true,
            track: this.props.track,
            tracks: this.props.tracks
        }
        
    }

    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
        this.props.fetchTracks()
    }


    render() {

        // console.log(this.props.tracks)

        let temp;
        this.state.isPlaying ? temp = 'container-playhead-passive' : 'container-playhead-active'
        console.log(this.state)

        if(this.props.tracks === undefined){
            return null
        }else{
            
            return (
                <div>         
                        <footer className={temp}>
                            <AudioPlayer 
                            src={this.state.track.audioUrl}
                            />
                        </footer>
                </div>
            )
        }
    }
}


export default Playhead;