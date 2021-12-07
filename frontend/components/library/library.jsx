import React, { Component } from 'react'
import Waveform from '../waveform/waveform';
import TrackShowContainer from '../tracks/track_show_container';
import TrackShow from '../tracks/track_show';
import LibraryContainer from "./library_container";
import { Redirect, Link } from 'react-router-dom';

export class Library extends Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {

      this.props.fetchUser(this.props.currentUser.id);
      this.props.fetchTracks();
    
    }

    render() {
    const { tracks , currentUser} = this.props
    if (currentUser.likes === undefined) {
      // window.location.reload()
      return (
        <div className="outside-wrapper">
          <h1 id="library-username">Hey {currentUser.username}! You don't have any favorite tracks. Start by liking some!</h1>
        </div>
      )
    }else if (tracks === undefined) {
      // window.location.reload();
    }else if (Object.keys(tracks).length===0){
      return null
    } else {
      return(
        <div className="outside-wrapper">
          <div className="grid-header">
            <br />
          </div>

          <h1 id="library-username">Hey {currentUser.username}! All your likes in one place.</h1>
                  {Object.values(tracks).map((track, i) => (
                    Object.keys(currentUser.likes).map((key, j) => {
                        const trackId = parseInt(key)
                        if((track.id === trackId) && (tracks !== undefined)){
                          // console.log(track)
                          //   console.log(tracks)
                            // console.log(trackId)
                            
                                return (
                                <>
                                {/* {console.log(track.id)} */}
                                  <div key={i} className="liked-track">
                                    <div key={j} className="wrapper">
                                      <Link to={`/tracks/${track.id}`} onClick={()=>this.props.history.push(`tracks/${track.id}`)}> <img id="track-show-image" src={track.photoUrl} alt={track.title} /> </Link>
                                            {/* <Waveform track={track}/> */}
                                      <Link to={`/tracks/${track.id}`} onClick={()=>this.props.history.push(`/tracks/${track.id}`)}><span id="track-show-title">{track.title}</span> </Link>
                                    </div>
                                  </div>
                                </>
                                )
                        }else if((tracks === undefined) || (track === undefined) ){
                            // window.location.reload()
                        }
                    })
                  ))}
           </div>
      )
    }  
  } 
}

export default Library
