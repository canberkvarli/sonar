import React from 'react';

import { PlayButton } from './playbutton';
import { WaveformContainer } from './waveform_container';
import { Wave } from './wave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


import {connect } from "react-redux";
import { pauseTrack, playTrack, setCurrentTrack, setCurrentProgress } from '../../actions/playhead_actions';
import { withRouter } from 'react-router';


// import ReactLoading from 'react-loading';
import PlayheadContainer from "../playhead/playhead_container"

import WaveSurfer from 'wavesurfer.js';

// import AudioPlayer from 'react-h5-audio-player'; //autoplay is always true
// import ReactPlayer from 'react-player' //deferred error

import ReactAudioPlayer from 'react-audio-player'; //This works fine but lacks element change (main audio player)


class Waveform extends React.Component {
    constructor(props){
        super(props)
      if (!!JSON.parse(localStorage.getItem("localTrack"))) {

        const localTrack = JSON.parse(localStorage.getItem("localTrack"));

        this.state = {
            playing: false,
            track: this.props.track,
            localTrack,
            paused: this.props.paused
        };

    console.log(this.props)
    console.log(this.state)

    } else {
        this.state = {
            playing: false,
            track: this.props.track,
            paused: this.props.paused
        }
    }
}

    
    componentDidMount() {

        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 220,
            progressColor: '#ff5500',
            responsive: true,
            waveColor: "#5d5d5d",
            cursorColor: 'transparent',
            partialRender: true
        });

        this.waveform.load(track);
        this.props.setCurrentTrack(track)

    };

    componentDidUpdate(){
        console.log("Waveform is updated")
        this.props.setCurrentTrack(track)

        // const playheadLocalTrack = JSON.parse(localStorage.getItem("playheadTrack"));
    }


    handlePlay = () => {
        this.setState({
             playing: !this.state.playing,
            //  playhead: true
        });

        this.props.setCurrentTrack(this.props.track)
        this.waveform.playPause();
        localStorage.setItem("localTrack", JSON.stringify(this.props.track)) === 'true';

        // localStorage.setItem("dummyTrack", JSON.stringify(this.state.track)) === 'true';
        localStorage.setItem("isPlaying", true)
        if(!this.state.playing){
            this.props.setCurrentTrack(this.props.track)
            this.props.playTrack()
            this.setState({
                paused: !this.state.paused
            })

        }else if(this.state.playing){
            this.props.pauseTrack()
        }
    };

    // handlePlayerPlay = () => {
    //     this.setState({ playing: !this.state.playing });

    //     // mute waveform but keep the wave progressing
    //     this.waveform.play();
    //     this.waveform.toggleMute();

    // }

    // handlePlayerPause = () => {
    //     this.setState({ playing: !this.state.playing });
    //     // this.waveform.play()
    //     this.waveform.pause()
    //     this.waveform.toggleMute();

    // }



    render() {
        
        const playIcon = <FontAwesomeIcon icon={faPlay} />
        const pauseIcon = <FontAwesomeIcon icon={faPause} />
        return(

            <div className="waveform-outer-div">
                <WaveformContainer className="waveform-div">
                    <PlayButton onClick={this.handlePlay} >
                        { !this.state.playing ? pauseIcon : playIcon }
                    </PlayButton>
                    <Wave id="waveform" />
                    <audio id="track" src={this.props.track.audioUrl} />
                </WaveformContainer>
            {!this.state.paused? <PlayheadContainer /> : null}
            </div>  
        );
    }
};

export default Waveform;


const mSTP = (state)  => {
    return{

        trackId: ownProps.match.params.trackId,
        track: state.entities.tracks[ownProps.match.params.trackId],
        currentTrack: state.playhead.currentTrack,
        paused: state.playhead.paused,


    }
}

const mDTP = dispatch => {
    return{
        setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
    }
}

connect(mSTP, mDTP)(Waveform)
