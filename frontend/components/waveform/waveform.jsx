import React, { Component } from 'react';

import { PlayButton } from './playbutton';
import { WaveformContainer } from './waveform_container';
import { Wave } from './wave';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import ReactLoading from 'react-loading';

import WaveSurfer from 'wavesurfer.js';

// import AudioPlayer from 'react-h5-audio-player'; //autoplay is always true
// import ReactPlayer from 'react-player' //deferred error

import ReactAudioPlayer from 'react-audio-player'; //This works fine



class Waveform extends Component {

        state = {
            playing: true,
            track: this.props.track
        };

    
    
    componentDidMount() {
        // let trackcument.querySelector('#track');

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

        const loading = () => {
            <ReactLoading type={spokes} color="#000000" height={667} width={375} />
        }
        
        // var peaks = [-0.26953125,0.4929960072040558,-0.181915283203125,0.07702872157096863,-0.341033935546875,0.12259285151958466,-0.166961669921875,0.2455519288778305,-0.159393310546875,0.24765770137310028,-0.248382568359375,0.26529741287231445,-0.24261474609375,0.2760094106197357,-0.285186767578125,0.3229468762874603,-0.340911865234375,0.23392437398433685,-0.132965087890625,0.17954039573669434,-0.26177978515625,0.23334452509880066,-0.254638671875,0.26572465896606445,-0.175018310546875,0.23471786081790924,-0.22222900390625,0.15353861451148987,-0.2474365234375,0.09958189725875854,-0.11846923828125,0.17569506168365479,-0.07952880859375,0.16989654302597046,-0.112762451171875,0.14151433110237122,-0.06927490234375,0.10980559885501862,-0.02569580078125,0.06964323669672012,-0.0487060546875,0.060762353241443634,-0.0169677734375,0.05374309420585632,-0.0111083984375,0.0316171757876873,-0.00433349609375,0.042359691113233566,-0.007843017578125,0.04104739427566528,-0.017547607421875,0.04223761707544327,-0.000030517578125,0.03100680559873581,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0.000030518509447574615,-0.000030517578125,0,0];
        this.waveform.load(track);
        this.waveform.on("loading", loading)
    };


    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();

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
        return(

            <div className="waveform-outer-div">
                <WaveformContainer className="waveform-div">
                    <PlayButton onClick={this.handlePlay} >
                        { !this.state.playing ? pauseIcon : playIcon }
                    </PlayButton>
                    <Wave id="waveform" />
                    <audio id="track" src={this.props.track.audioUrl} />
                </WaveformContainer>
                <footer id="playhead-footer">
                    <ReactAudioPlayer 
                    onPlay={this.handlePlayerPlay}
                    onPause={this.handlePlayerPause}
                    src={this.props.track.audioUrl}
                    controls={true}
                    autoPlay={false}
                    className={"audioplayer"}
                    />
                </footer>
            </div>  
        );
    }
};

export default Waveform;