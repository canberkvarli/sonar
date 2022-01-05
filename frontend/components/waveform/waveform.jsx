// import React from 'react';

// import { PlayButton } from './playbutton';
// import { WaveformContainer } from './waveform_container';
// import { Wave } from './wave';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
// import Oval from "react-loader-spinner";

// import {connect } from "react-redux";

// import WaveSurfer from 'wavesurfer.js';


// class Waveform extends React.Component {
//     constructor(props){
//         super(props)
//       if (!!JSON.parse(localStorage.getItem("localTrack"))) {

//         const localTrack = JSON.parse(localStorage.getItem("localTrack"));

//         this.state = {
//             isWaveformPlaying: false,
//             track: this.props.track,
//             localTrack,
//             paused: this.props.paused,
//             playheadDisplay: true,
//             progress: 0,
//             loading: false
//         };


//     } else {
//         this.state = {
//             isWaveformPlaying: false,
//             track: this.props.track,
//             paused: this.props.paused
//         }
//     }

//     this.handlePlay = this.handlePlay.bind(this)
// }

    
//     componentDidMount() {

//         this.waveform = WaveSurfer.create({
//             barWidth: 2,
//             cursorWidth: 0,
//             container: '#waveform',
//             backend: 'WebAudio',
//             height: 220,
//             showCursor: false,
//             cursorColor: "black",
//             progressColor: '#ff5500',
//             responsive: true,
//             waveColor: "lightgray",
//             partialRender: true,
//             pixelRatio: 1,
//         });

//         this.waveform.load(track);

//         this.waveform.on("loading", () => {
//             this.setState({
//                 loading: true
//             })
//         })
        
//         this.waveform.on("ready", () => {
//             this.setState({
//                 loading: false
//             })


//         }) 
        

//         // this.props.setCurrentTrack(this.props.track)

//     console.log(this.props)
//     console.log(this.state)
//     };

//     componentDidUpdate(){
//         console.log("Waveform is updated")
//         this.props.currentUser? this.waveform.toggleMute() : null

//     }

//     handlePlay = () => {
//         // this.waveform.play();
//         // this.waveform.toggleMute()
//                 //if(!this.props.paused){
//             // this.props.pauseTrack()
//         //     this.waveform.pause()
//         // }else if(this.props.paused){
//         //     this.props.playTrack()
//         //     this.waveform.play()
//         // }
//     };



//     render() {

//         const loader = <Oval arialLabel="loading-indicator" color="whitesmoke" type='Oval' width="750" height="120"/>

//         return(

//             <div className="waveform-outer-div">
//                 <WaveformContainer className="waveform-div">
//                     <Wave id="waveform" onClick={this.handlePlay()}/>
//                     <audio id="track" src={this.props.track.audioUrl} />
//                 <div className='loader'>
//                     {this.state.loading? loader : null}
//                 </div>
//                 </WaveformContainer>
//             </div>  
//         );
//     }
// };

// export default Waveform;


// const mSTP = (state)  => {
//     return{
//         trackId: ownProps.match.params.trackId,
//         track: state.entities.tracks[ownProps.match.params.trackId],
//         currentTrack: state.playhead.currentTrack,
//         paused: state.playhead.paused,
//     }
// }

// const mDTP = dispatch => {
//     return{
//         playTrack: () => dispatch(playTrack()),
//         pauseTrack: () => dispatch(pauseTrack()),
//     }
// }

// connect(mSTP, mDTP)(Waveform)
