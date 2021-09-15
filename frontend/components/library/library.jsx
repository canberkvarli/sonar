import React, { Component } from 'react'
import Waveform from '../waveform/waveform';
import TrackShowContainer from '../tracks/track_show_container';
import TrackShow from '../tracks/track_show';

export class Library extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
      this.props.fetchTracks()
    }

    render() {
    console.log(this.props)
    const { tracks , currentUser} = this.props
    if (!currentUser.likes){ return <>You have no likes! Start liking some tracks to populate this page.</> }
    if (Object.keys(tracks).length===0){ return null } 
    else {
      return(
        <>
          <div className="grid-header">
            <h1>
              All your likes in one place.
            </h1>
          </div>
                  {tracks.map((track, i) => (

                    Object.keys(currentUser.likes).map((key, j) => {
                        const trackId = parseInt(key)
                        if((j < i) && (track.id === trackId)){
                            console.log(track)
                            console.log(trackId)
                                return (
                                <>
                                    <img key={i} id="track-show-image" src={track.photoUrl} alt={track.title} />
                                        <Waveform track={track}/>
                                    <span id="track-show-title">{track.title}</span>
                                    <div className="track-interact-buttons">
                                        {/* {this.toggleLike()} */}
                                    </div>
                                </>

                                )
                        }
                    })
                  ))}
           </>
      )
    }
    }   
}

export default Library
