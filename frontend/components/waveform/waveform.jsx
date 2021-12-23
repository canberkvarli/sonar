import React, { Component } from 'react';

import { PlayButton } from './playbutton';
import { WaveformContainer } from './waveform_container';
import { Wave } from './wave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
// import ReactLoading from 'react-loading';
import Playhead from "../playhead/playhead"

import WaveSurfer from 'wavesurfer.js';

// import AudioPlayer from 'react-h5-audio-player'; //autoplay is always true
// import ReactPlayer from 'react-player' //deferred error

import ReactAudioPlayer from 'react-audio-player'; //This works fine but lacks element change (main audio player)



class Waveform extends Component {

        state = {
            playing: true,
            track: this.props.track
        };

    
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
    };


    handlePlay = () => {
        this.setState({ playing: !this.state.playing });

        // this.props.setCurrentTrack(this.props.track)

        this.waveform.playPause();
        this.waveform.toggleMute();

        localStorage.setItem("localTrack", JSON.stringify(this.state.track)) === 'true';
        localStorage.setItem("isPlaying", true)

    };

    handlePlayerPlay = () => {
        this.setState({ playing: !this.state.playing });

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
        
        const playIcon = <FontAwesomeIcon icon={faPlay} />
        const pauseIcon = <FontAwesomeIcon icon={faPause} />
        console.log(this.props)
        return(

            <div className="waveform-outer-div">
                <WaveformContainer className="waveform-div">
                    <PlayButton onClick={this.handlePlay} >
                        { !this.state.playing ? pauseIcon : playIcon }
                    </PlayButton>
                    <Wave id="waveform" />
                    <audio id="track" src={this.props.track.audioUrl} />
                </WaveformContainer>
            </div>  
        );
    }
};

export default Waveform;