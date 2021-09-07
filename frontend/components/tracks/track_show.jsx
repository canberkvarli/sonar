import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHeart } from 'react-icons/fa'
import Waveform from '../waveform/waveform';

class TrackShow extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            track: this.props.track,
            userLikesTrack: this.props.userLikesTrack,
            loggedIn: !!this.props.currentUser

        }


            this.deleteLike = this.deleteLike.bind(this)
            this.createLike = this.createLike.bind(this)
            this.dispNumLikes = this.dispNumLikes.bind(this)
    }

    

    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
    }

    createLike(e) {
        e.preventDefault()
        const trackId = this.props.trackId
        const currentUserId = this.props.currentUser.id
        this.props.createLike({ liker_id: currentUserId, track_id: trackId }).then(() => {
            this.props.fetchUser(currentUserId)
            this.props.fetchTrack(trackId)
            // debugger
        })
        this.setState({ userLikesTrack: true }, 
            () => {console.log(this.state)});
           
        }
        
        deleteLike(e) {
            debugger
            e.preventDefault()
            const track  = this.state.track
            const currentLikeId = this.props.currentUser.likes[track.id].id
            this.props.deleteLike(currentLikeId, track).then(() => {

            this.props.fetchUser(this.props.currentUser)
            this.props.fetchTrack(track.id)
        })
            this.setState({ userLikesTrack: false },
                () => console.log(this.state))
        }
        // debugger
        toggleLike() {
            
            if (!this.state.loggedIn) {
            return (
                
               <Link to="/login"> <span className="icon-heart"><FaHeart /></span><p className="likes-count">{this.dispNumLikes()}</p></Link>
               
                )
            }
            else {

                if (this.props.userLikesTrack) {
                    return (
                    <button 
                    onClick={this.deleteLike}
                    className='liked'><span className="icon-heart"><FaHeart /></span><p className="likes-count">{this.dispNumLikes()}</p></button>
                    )
                }
                else {
                    return (
                    <button onClick={this.createLike}><span className="icon-heart"><FaHeart /></span><p className="likes-count">{this.dispNumLikes()}</p></button>
                    )
                }
            }
        }
        dispNumLikes(){
            const { track } = this.props;
            if (!track) return
            if (!track.likes) return 'Like'
            else return (Object.keys(track.likes).length)
        }

    render(){
        console.log(this.props)
        const {track, currentUser, userLikesTrack} = this.props;
        
        if ((track === undefined)){
            return (<h1>No track can be found here :D</h1>)
        }else {
            return (
                <> 
                    <img id="track-show-image" src={track.photoUrl} alt={track.title} />
                        <Waveform track={track}/>
                    <span id="track-show-title">{track.title}</span>
                    <div className="track-interact-buttons">
                        {this.toggleLike()}
                    </div>
                </>
            )
        }
    }
}


export default TrackShow