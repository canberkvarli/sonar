import React from 'react'
import ReactAudioPlayer from 'react-audio-player'; // Works almost perfectly fine but lacks custom element selections from the player.
import ReactJkMusicPlayer from 'react-jinke-music-player';
import Waveform from '../waveform/waveform';


class Playhead extends React.Component {
    constructor(props){
        super(props)

         if (!!JSON.parse(localStorage.getItem("localTrack"))) {

            const localTrack = JSON.parse(localStorage.getItem("localTrack"));
            const isPlaying = localStorage.getItem("isPlaying");
        
        this.state = {
            playing: true,
            track: this.props.track,
            dummy: this.props.currentTrack,
            currentTrack: localTrack,
            playheadLocalTrack: JSON.parse(localStorage.getItem("localTrack"))
        }
    }else{
            this.state = {
            playing: true,
            track: this.props.track,
        }
    }

       
    }
    
    componentDidMount(){
        this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId)
        // this.props.setCurrentTrack(this.state.currentTrack);


      }
      
    
      shouldComponentUpdate(nextProps, nextState){
        if((this.state.track != nextState.track)){
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

            const audioList = [
                {
                  name:  currentTrack? this.state.currentTrack.title : "Hello",
                  cover: currentTrack? this.state.currentTrack.photoUrl: "a.jpg",
                  musicSrc: currentTrack? this.state.currentTrack.audioUrl: "a.mp3"
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
            return <h1>There is no track probably</h1>
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