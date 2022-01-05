import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaAngleDoubleLeft } from 'react-icons/fa'
import PlayButtonContainer from "../play_button/play_button_container";
import Waveform from '../waveform/waveform';

class TrackShow extends React.Component{
    constructor(props){
        super(props)

        this.state = {

            track: this.props.track,
            userLikesTrack: this.props.userLikesTrack,
            loggedIn: !!this.props.currentUser,
            isPlaying: false

        }
            this.deleteLike = this.deleteLike.bind(this)
            this.createLike = this.createLike.bind(this)
            this.dispNumLikes = this.dispNumLikes.bind(this)

        console.log(this.props)
    }

    

    componentDidMount(){
        // this.props.fetchTracks().then(
        //     this.props.setCurrentTrack(this.props.track)
        // )
        this.props.fetchTrack(this.props.trackId)
    }

    componentWillUnmount(){
        this.props.currentTime? this.props.setCurrentProgress(this.props.currentTime) : null
    }
    

    createLike(e) {
        const trackId = this.props.trackId
        const currentUserId = this.props.currentUser.id
        this.props.createLike({ liker_id: currentUserId, track_id: trackId }).then(() => {
            this.props.fetchUser(currentUserId)
            this.props.fetchTrack(trackId)
        })
        this.setState({ userLikesTrack: true });
    }
        
        deleteLike(e) {
            
            const { track, currentUser, currentLikeId } = this.props;

            // const currentLikeId = this.props.currentUser.likes[track.id].id
            
            this.props.deleteLike(currentLikeId, track.id).then(() => {
                this.props.fetchUser(currentUser.id)
                this.props.fetchTrack(track.id)
        })
            this.setState({ userLikesTrack: false })
        }
        toggleLike() {    
            if (!this.state.loggedIn) {
            return (
               <Link to="/login"> 
                <span className="icon-heart">
                    <FaHeart />
                </span>
                    <span id="liked-button-text">Like</span>
                </Link>
                )
            }
            else {
                if (this.state.userLikesTrack) {
                    return (
                    <button 
                    onClick={this.deleteLike}
                    className='liked'>
                        <span className="icon-heart">
                            <FaHeart /> <span id="liked-button-text">Liked</span>
                        </span>
                    {/* <p className="likes-count">Liked</p> */}
                    </button>
                    )
                }
                else {
                    return (
                    <button 
                    className="not-liked" 
                    onClick={this.createLike}>
                        <span className="icon-heart">
                            <FaHeart /> <span id="liked-button-text">Like</span>
                        </span>
                        {/* <p className="likes-count">Like</p> */}
                    </button>
                    )
                }
            }
        }
        dispNumLikes(){
            if (!this.props.track) return
            if (!this.props.track.likes) return 'Like'
            else return (Object.keys(this.props.track.likes).length) 
        }



    render(){


        
        const {track, currentUser, userLikesTrack, pauseTrack, playTrack, paused, setCurrentProgress, setCurrentTrack, currentTime} = this.props;
        // localStorage.setItem("localTrack", JSON.stringify(track)) === 'true';
        this.state.isPlaying ? temp = 'container-playhead-passive' : 'container-playhead-active'
        if ((track === undefined)){
            return null
        } else {
            return (
                <> 
                    <div className="track-banner">
                        <div className="track-banner-left" onClick={this.handlePlay}>

                            <PlayButtonContainer trackId={this.props.trackId} track={this.props.track}/>

                            <div className="track-banner-labels">
                                <h2 className="track-banner-title">{this.props.track.title}</h2>
                                {/* <h3><Link className="track-banner-uploader" to={`/users/${this.props.track.uploader.id}`}>{this.props.track.uploader.username}</Link></h3> */}
                            </div>
                        </div>
                        <div className="track-banner-right">
                            <div className='track-banner-middle'>
                                <Waveform 
                                    track={track} 
                                    pauseTrack={() => pauseTrack()}
                                    playTrack={() => playTrack()}
                                    currentUser = {currentUser}
                                    paused={paused}
                                    currentTime={currentTime}
                                />
                            </div>
                            <div className="track-banner-right-labels">
                                {/* <h3 className="time-ago">{this.props.track.createdTime.includes("about") ? this.props.track.createdTime.slice(6) : this.props.track.createdTime} ago</h3> */}
                            </div>
                            <img className="track-show-cover-img" src={this.props.track.photoUrl} />
                        </div>
                </div>
                <div className='interact-buttons-container'>
                    <div className="track-interact-buttons">
                        <div id="track-like-button">
                            {this.toggleLike()}
                        </div>
                    </div>
                </div>

                    {/* <div className='track-banner-left'>
                        <PlayButtonContainer trackId={this.props.trackId} track={this.props.track} />
                    </div>
                    <img id="track-show-image" src={track.photoUrl} alt={track.title} />
                    <span id="track-show-title">{track.title}</span>

                    <h1 className="description">
                        {track.description}
                    </h1> */
                    }
                </>
            )
        }
    }
}


export default TrackShow