import React from 'react';

import { PlayButton } from './playbutton';
import { WaveformContainer } from './waveform_container';
import { Wave } from './wave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Oval from "react-loader-spinner";

import {connect } from "react-redux";

import WaveSurfer from 'wavesurfer.js';


class Waveform extends React.Component {
    constructor(props){
        super(props)
      if (!!JSON.parse(localStorage.getItem("localTrack"))) {

        const localTrack = JSON.parse(localStorage.getItem("localTrack"));

        this.state = {
            isWaveformPlaying: false,
            track: this.props.track,
            localTrack,
            paused: this.props.paused,
            playheadDisplay: true,
            progress: 0,
            loading: false
        };


    } else {
        this.state = {
            isWaveformPlaying: false,
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
        // this.waveform.on("interaction", () => {

        // })

        this.waveform.on("loading", () => {
            this.setState({
                loading: true
            })
        })
        
        this.waveform.on("ready", () => {
            this.setState({
                loading: false
            })
        })  
        // this.props.setCurrentTrack(this.props.track)

    console.log(this.props)
    console.log(this.state)
    };

    componentDidUpdate(){
        console.log("Waveform is updated")
        // this.props.setCurrentTrack(this.props.track)
        // const playheadLocalTrack = JSON.parse(localStorage.getItem("playheadTrack"));
        if(!this.props.paused){
            
        }
    }
    componentWillUnmount(){
        
    }


    handlePlay = () => {
        this.setState({
             isWaveformPlaying: !this.state.isWaveformPlaying,
            //  playhead: true
        });

        // this.props.setCurrentTrack(this.props.track)

        this.waveform.playPause();
        this.props.currentUser? this.waveform.toggleMute() : null
        localStorage.setItem("localTrack", JSON.stringify(this.props.track)) === 'true';

        // localStorage.setItem("dummyTrack", JSON.stringify(this.state.track)) === 'true';
        localStorage.setItem("isPlaying", true)

        if(!this.state.isWaveformPlaying){
            this.props.playTrack()
            this.setState({
                paused: !this.state.paused,
                playheadDisplay: true
            })

        }else if(this.state.isWaveformPlaying){
            this.props.pauseTrack()
            this.setState({
                paused: !this.state.paused
            })
        }
    };

    render() {
        
        const playIcon = <FontAwesomeIcon icon={faPlay} />
        const pauseIcon = <FontAwesomeIcon icon={faPause} />

        const loader = <Oval arialLabel="loading-indicator" color="darkslategrey" type='Oval' width="750" height="120"/>
        return(

            <div className="waveform-outer-div">
                <WaveformContainer className="waveform-div">
                    <Wave id="waveform" />
                    <audio id="track" src={this.props.track.audioUrl} />
                <div className='loader'>
                    {this.state.loading? loader : null}
                </div>
                </WaveformContainer>
                {/* If loading render LOADER, if not loading return null */}
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
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
    }
}

connect(mSTP, mDTP)(Waveform)
