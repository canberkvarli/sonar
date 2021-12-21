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
            // localStorage.setItem("track", JSON.stringify(this.state.track)) === 'true';


        this.handlePlayerPlay = this.handlePlayerPlay.bind(this)
        this.handlePlayerPause = this.handlePlayerPause.bind(this)

            const defaultTrack = {
            title: "XX",
            description: "The XX",
            audioUrl: "xxxxxxxx.mp3"
        }
    }

    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId)
       
            if (typeof JSON.parse(localStorage.getItem("localTrack")) !== undefined) {

            const localTrack = JSON.parse(localStorage.getItem("localTrack")) || defaultTrack;
            this.setState({
                track: this.props.track,
                currentTrack: localTrack
            })
            this.props.setCurrentTrack(localTrack)
            console.log(this.state)
            }
    }

    


    handlePlayerPlay = () => {
        this.setState({
             playing: !this.state.playing,            
        });

        // mute waveform but keep the wave progressing
        this.waveform.play();
        this.waveform.toggleMute();
        }

    handlePlayerPause = () => {
        this.setState({ playing: !this.state.playing });
        // this.waveform.play()
        this.waveform.pause()
        this.waveform.toggleMute();
        }

    render() {
        // console.log(this.props.tracks)
        console.log(this.props)
        console.log(this.state)

        let temp;
        this.state.playing ? temp = 'container-playhead-passive' : 'container-playhead-active'

        if(this.props.currentTrack === undefined || this.props.currentTrack === null || this.props.track === undefined || this.props.tracks === undefined ){
            return <h1>hello from playhead</h1>
        } else{
            return (
                <div>         
                    <footer id="playhead-footer">
                        <ReactAudioPlayer 
                            onPlay={this.handlePlayerPlay}
                            onPause={this.handlePlayerPause}
                            src={this.props.currentTrack.audioUrl}
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