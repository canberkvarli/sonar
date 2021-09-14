import React, { Component } from 'react';

import { PlayButton } from './playbutton';
import { WaveformContainer } from './waveform_container';
import { Wave } from './wave';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

import WaveSurfer from 'wavesurfer.js';
import AudioPlayer from 'react-h5-audio-player';


class Waveform extends Component {
    state = {
        playing: false
    };

    componentDidMount() {
        const track = document.querySelector('#track');

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
        });

        this.waveform.load(track);
    };

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };

    render() {
        
        const playIcon = <FontAwesomeIcon icon={faPlay} />
        const pauseIcon = <FontAwesomeIcon icon={faPause} />
        return (
            <div className="waveform-outer-div">
                <WaveformContainer className="waveform-div">
                    <PlayButton onClick={this.handlePlay} >
                        {!this.state.playing ? playIcon : pauseIcon }
                        {/* add icons to 'Play' and 'Pause' */}
                    </PlayButton>
                    <Wave id="waveform" />
                    <audio id="track" src={this.props.track.audioUrl} />
                </WaveformContainer>
                 <footer id="playhead-footer">
                    <AudioPlayer 
                    src={this.props.track.audioUrl}
                />
                </footer>
            </div>
            
        );
        
    }
};

export default Waveform;