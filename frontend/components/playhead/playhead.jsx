import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; 

class Playhead extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            playing: true,
            track: this.props.track,
            currentTrack: this.props.track
            // tracks: this.props.tracks
        }



        //     const defaultTrack = {
        //     title: "XX",
        //     description: "The XX",
        //     audioUrl: "xxxxxxxx.mp3"
        // }

        if (typeof JSON.parse(localStorage.getItem("localTrack")) !== undefined) {

            const localTrack = JSON.parse(localStorage.getItem("localTrack"));
            this.props.setCurrentTrack(localTrack)
            this.setState({
                track: this.props.track,
                currentTrack: localTrack
            })
            console.log(this.state)
        }
    }
    
    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId)
    }
        

    render() {
        console.log(this.props)
        console.log(this.state)
        const {currentTrack, tracks, currentUser} = this.props;
        let temp;
        this.state.playing ? temp = 'container-playhead-passive' : 'container-playhead-active'

        if(currentTrack === undefined || currentTrack === null || tracks === undefined || !currentUser){
            return null
        } else{
            return (
                <div>         
                    <footer id="playhead-footer">
                        <ReactAudioPlayer 
                            onPlay={this.handlePlayerPlay}
                            onPause={this.handlePlayerPause}
                            src={currentTrack.audioUrl}
                            controls={true}
                            autoPlay={false}
                            //use 'temp' for the className.
                            className={"audioplayer"}
                        />
                    </footer>
                </div>
            )
        }

        }
    }

export default Playhead;