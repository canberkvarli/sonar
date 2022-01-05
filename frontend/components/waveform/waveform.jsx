// import React from 'react';

// // import { WaveformContainer } from '../tracks/waveform_container';
// // import { Wave } from '../tracks/wave';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
// import Oval from "react-loader-spinner";

// import {connect } from "react-redux";

// import WaveSurfer from 'wavesurfer.js';


// class Waveform extends React.Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             isWaveformPlaying: false,
//             track: this.props.track,
//             paused: this.props.paused,
//             playheadDisplay: true,
//             progress: 0,
//             loading: false
//         };
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

 



//     render() {

//         const loader = <Oval arialLabel="loading-indicator" color="whitesmoke" type='Oval' width="750" height="120"/>

//         return(

//             <div className="waveform-outer-div">
//                 <WaveformContainer className="waveform-div">
//                     <Wave id="waveform" />
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

