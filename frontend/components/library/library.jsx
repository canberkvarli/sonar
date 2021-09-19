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

      this.props.fetchTracks()
      this.props.fetchUser(this.props.currentUser.id)
    
    }

    render() {
    // console.log(this.props)
    const { tracks , currentUser} = this.props
    // if (!currentUser.likes){ return <>You have no likes! Start liking some tracks to populate this page.</> }
    if (Object.keys(tracks).length===0){ return null } 
    else{
      return(
        <div className="outside-wrapper">
            {/* <h1>
              <span id="library-username">{currentUser.username} </span>here is all your likes and in one place!
            </h1> */}
          <div className="grid-header">
            <br />
          </div>
          <h1 id="library-username">Hey {currentUser.username}! All your likes in one place.</h1>
                  {tracks.map((track, i) => (
                    Object.keys(currentUser.likes).map((key, j) => {
                        const trackId = parseInt(key)
                        if((j < i) && (track.id === trackId)){
                            // console.log(track)
                            // console.log(trackId)
                                return (
                                <>
                                {/* {console.log(track.id)} */}
                                  <div className="liked-track">
                                    <div key={j} className="wrapper">
                                      <Link to={`/tracks/${track.id}`}> <img key={i} id="track-show-image" src={track.photoUrl} alt={track.title} /> </Link>
                                            {/* <Waveform track={track}/> */}
                                      <Link to={`/tracks/${track.id}`}><span id="track-show-title">{track.title}</span> </Link>
                                    </div>
                                  </div>
                                </>

                                )
                        }
                    })
                  ))}
           </div>
      )
    }
    }   
}

export default Library
