import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; // Works almost perfectly fine but lacks custom element selections from the player.
import ReactJkMusicPlayer from 'react-jinke-music-player';
import Waveform from '../waveform/waveform';


class Playhead extends React.Component {
    constructor(props){
        super(props)

         if (typeof JSON.parse(localStorage.getItem("localTrack")) !== undefined) {

            const localTrack = JSON.parse(localStorage.getItem("localTrack"));
            const isPlaying = localStorage.getItem("isPlaying");
            this.props.setCurrentTrack(localTrack);
        
        this.state = {
            playing: true,
            track: this.props.track,
            dummy: this.props.currentTrack,
            currentTrack: localTrack,
            playheadLocalTrack: JSON.parse(localStorage.getItem("localTrack"))
        }
    }

       
    }
    
    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId)

 


        localStorage.setItem("playheadTrack", JSON.stringify(this.state.currentTrack)) === 'true';
        const playheadLocalTrack = JSON.parse(localStorage.getItem("playheadTrack"));
        if(playheadLocalTrack !== JSON.parse(localStorage.getItem("localTrack"))){
            this.props.setCurrentTrack(this.state.track)
            console.log('we are different. So let me update the playhead')
        }
      
    }
    
      shouldComponentUpdate(nextProps, nextState){
        if(this.props.paused != nextProps.paused){
          this.props.setCurrentTrack(this.state.track)
          return true
        }else{
          return false
        }
    }


    render() {

        console.log(this.props)
        console.log(this.state)

        const { currentTrack, tracks, currentUser } = this.props;
        let temp;
        this.state.playing ? temp = 'container-playhead-passive' : 'container-playhead-active'

            const audioList = [
                {
                    name:  currentTrack? this.state.currentTrack.title : '',
                    cover: currentTrack? this.state.currentTrack.photoUrl: '',
                    musicSrc: currentTrack? this.state.currentTrack.audioUrl: ''
                }
            ];
        

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
    
        

        if(currentTrack === undefined

             || currentTrack === null 
             || tracks === undefined 
             || !currentUser
     
        ){
            return null
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
                        <ReactJkMusicPlayer {...options} audioLists={audioList}/>
                    </div>
                </div>
            )
        }
    
        }
    }

export default Playhead;