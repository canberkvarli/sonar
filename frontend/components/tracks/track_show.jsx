import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaAngleDoubleLeft } from 'react-icons/fa'
import Waveform from '../waveform/waveform';
import AudioPlayer from 'react-h5-audio-player';


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
    }

    

    componentDidMount(){

        // this.props.fetchTracks()
        this.props.fetchTrack(this.props.trackId).then(
            console.log(this.props)
        )
    }


    createLike(e) {
        const trackId = this.props.trackId
        const currentUserId = this.props.currentUser.id
        this.props.createLike({ liker_id: currentUserId, track_id: trackId }).then(() => {
            this.props.fetchUser(currentUserId)
            this.props.fetchTrack(trackId)
        })
        this.setState({ userLikesTrack: true }, 
            () => {console.log(this.state)});
           
        }
        
        deleteLike(e) {
            
            console.log(this.props)
            const { track, currentUser, currentLikeId } = this.props;

            // const currentLikeId = this.props.currentUser.likes[track.id].id
            
            this.props.deleteLike(currentLikeId, track.id).then(() => {
                this.props.fetchUser(currentUser.id)
                this.props.fetchTrack(track.id)
        })
            this.setState({ userLikesTrack: false },
                () => console.log(this.state))
        }
        toggleLike() {
            
            if (!this.state.loggedIn) {
            return (
               <Link to="/login"> <span className="icon-heart"><FaHeart /></span><p className="likes-count">{this.dispNumLikes()}</p></Link>
                )
            }
            else {

                if (this.state.userLikesTrack) {
                    return (
                    <button 
                    onClick={this.deleteLike}
                    className='liked'><span className="icon-heart"><FaHeart /></span><p className="likes-count">{this.dispNumLikes()}</p></button>
                    )
                }
                else {
                    return (
                    <button className="not-liked" onClick={this.createLike}><span className="icon-heart"><FaHeart /></span><p className="likes-count">{this.dispNumLikes()}</p></button>
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
        console.log(this.props)
        console.log(this.state)

        const {track, currentUser, userLikesTrack} = this.props;
        let temp;
        this.state.isPlaying ? temp = 'container-playhead-passive' : 'container-playhead-active'
        if ((track === undefined)){
            return null
        }else if (!currentUser){
            return (
                <> 
                    <img id="track-show-image" src={track.photoUrl} alt={track.title} />
                        <Waveform track={track} />
                    <span id="track-show-title">{track.title}</span>
                    <h1 className="description">
                        {track.description}
                    </h1>
                    <span className="description" id="more-tracks">
                    <Link to="/">
                        <FaAngleDoubleLeft/> More tracks
                    </Link>
                    </span>
                </>
            )
        } 
        else {
            return (
                <> 
                    <img id="track-show-image" src={track.photoUrl} alt={track.title} />
                        <Waveform track={track} />
                    <span id="track-show-title">{track.title}</span>
                    <div className="track-interact-buttons">
                        {this.toggleLike()}
                    </div>
                    <h1 className="description">
                        {track.description}
                    </h1>
                    {/* <footer id="playhead-footer"className={temp}>
                            <AudioPlayer 
                            src={this.props.track.audioUrl}
                            />
                    </footer> */}
                </>
            )
        }
    }
}


export default TrackShow