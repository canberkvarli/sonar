import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; 

class Playhead extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            playing: true,
            currentTrack: this.props.track,
            track: this.props.track,
            // tracks: this.props.tracks
        }
     
        this.handlePlayerPlay = this.handlePlayerPlay.bind(this)
        this.handlePlayerPause = this.handlePlayerPause.bind(this)
    }

    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId)
        this.props.setCurrentTrack(this.props.track)
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
        console.log(this.props.tracks)
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