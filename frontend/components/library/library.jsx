import React, { Component } from 'react'
import PlayButtonContainer from '../play_button/play_button_container';
import { Redirect, Link } from 'react-router-dom';

export class Library extends Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {
      this.props.fetchTracks();
      this.props.fetchUser(this.props.currentUser.id);
    }

    componentDidUpdate(){
      console.log("library updated")
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
        <div className="wrapper">
          <hr className='container-line' />
          <div className="grid-header">
            <br />
          </div>
            <h1 className='container-title'>Likes</h1>
              <ul className='likes-container'>
                  {Object.values(tracks).map((track, i) => (
                    Object.keys(currentUser.likes).map((key, j) => {
                        const trackId = parseInt(key)
                        // liked tracks
                        if((track.id === trackId) && (tracks !== undefined)){
                                return (
                                <>
                                  <div key={i} className="likes-box">
                                      <Link to={`/tracks/${track.id}`} onClick={()=>this.props.history.push(`tracks/${track.id}`)}> <img id="track-show-image" src={track.photoUrl} alt={track.title} /> </Link>
                                       <div className='lib-play-btn'>
                                            {/* <Waveform track={track}/> */}
                                      <PlayButtonContainer trackId={track.id} track={track} />
                                      </div>
                                      <Link to={`/tracks/${track.id}`} onClick={()=>this.props.history.push(`/tracks/${track.id}`)}><span id="track-show-title">{track.title}</span> </Link>
                                  </div>
                                </>
                                )
                              }else if((tracks === undefined) || (track === undefined) ){
                                // window.location.reload()
                              }
                            })
                            ))}
                  </ul>
           </div>
      )
    }  
  } 
}

export default Library
