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
                    {Object.keys(currentUser.likes).map((key, i) => {
                        const trackId = parseInt(key)
                            if (tracks[i].id === trackId) {
                              
                                return (
                                <>
                                    <img id="track-show-image" src={tracks[i].photoUrl} alt={tracks[i].title} />
                                        <Waveform track={tracks[i]}/>
                                    <span id="track-show-title">{tracks[i].title}</span>
                                    <div className="track-interact-buttons">
                                        {/* {this.toggleLike()} */}
                                    </div>
                                </>

                                )}
                    })}
           </>
      )
    }
    }   
}

export default Library
