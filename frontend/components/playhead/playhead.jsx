import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; // Works almost perfectly fine but lacks custom element selections from the player.
import ReactJkMusicPlayer from 'react-jinke-music-player';
import Waveform from '../waveform/waveform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { PlayButton } from '../waveform/playbutton';


class Playhead extends React.Component {
    constructor(props){
        super(props)

         if (!!JSON.parse(localStorage.getItem("localTrack")) && typeof JSON.parse(localStorage.getItem("localTrack")) !== undefined) {

            const localTrack = JSON.parse(localStorage.getItem("localTrack"));
            const isPlaying = localStorage.getItem("isPlaying");
        
        this.state = {
            playing: true,
            track: this.props.track,
            dummy: this.props.currentTrack,
            localTrack: localTrack,
            playheadLocalTrack: JSON.parse(localStorage.getItem("localTrack"))
        }
    }else{
            this.state = {
            playing: true,
            track: this.props.currentTrack,
        }
    }

    this.handleAudioPlay = this.handleAudioPlay.bind(this)
       
    }
    
    componentDidMount(){
        // this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId)
        // this.props.setCurrentTrack(this.state.currentTrack);
      }
      
    
      shouldComponentUpdate(nextProps, nextState){
        if((this.state.track != nextState.track) || (this.state.localTrack != nextState.localTrack) || this.props.currentTrack != nextProps.currentTrack){
          console.log("playhead is updated")
          return true
        }else{
          return false
        }
    }


    handleAudioPlay(){
      // ON waveform play

    }


    render() {

        console.log(this.props)
        console.log(this.state)

        const playIcon = <FontAwesomeIcon icon={faPlay} />
        const pauseIcon = <FontAwesomeIcon icon={faPause} />

        const { currentTrack, tracks, currentUser } = this.props;

        // const location = this.props.match.path

            const audioList = [
                {
                  name:  this.state.localTrack? this.state.localTrack.title : "Hello",
                  cover: this.state.localTrack? this.state.localTrack.photoUrl: "a.jpg",
                  musicSrc: this.state.localTrack? this.state.localTrack.audioUrl: "a.mp3"
                }
            ];
        // audioList.push(this.state.localTrack)


        // if isPlaying === true, press play on playhead
         const options = {
            audioLists: audioList,
            showMiniModeCover: true,
            showDownload: false,
            showReload: false,
            showLyric: false,
            showDestroy: false,
            toggleMode: true,
            showPlayMode: false,
            autoPlay: false,
            mode: "full"

        }
    
        

        if(this.state.localTrack === undefined

             || this.state.localTrack === null 
             || tracks === undefined 
             || !currentUser
     
        ){
            return <h1 id="playhead-footer">Track is null or undefined probably</h1>
        } else {
            return (
                <div>         
                    {/* <footer id="playhead-footer">
                        <ReactAudioPlayer 
                            onPlay={this.handlePlayerPlay}
                            onPause={this.handlePlayerPause}
                            src={currentTrack.audioUrl}
                            controls={true}
                            autoPlay={false}
                            //use 'temp' for the className.
                            className={"audioplayer"}
                        />
                    </footer> */}
                    <div id="playhead-footer">
                        <ReactJkMusicPlayer 
                        {...options} 
                        audioLists={audioList}
                        getAudioInstance={(instance) => {
                        this.audioInstance = instance
                        }}
                        />
                    </div>
                </div>
            )
        }
    
        }
    }

export default Playhead;