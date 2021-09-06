import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class TrackIndexItem extends React.Component 
    {
        constructor(props){
            super(props)

            this.state = {
                track: this.props.track,
                userLikesTrack: this.props.userLikesTrack,
                loggedIn: !!this.props.currentUser
            }

            console.log(this.props)

            // this.deleteLike = this.deleteLike.bind(this)
            // this.createLike = this.createLike.bind(this)
            // this.dispNumLikes = this.dispNumLikes.bind(this)
        }

        // createLike(e) {
        //     e.preventDefault()
        //     const trackId = this.props.trackId
        //     const currentUserId = this.props.currentUser.id
        //     this.props.createLike({ liker_id: currentUserId, track_id: trackId }).then(() => {
        //     // update appropriate tables
        //     this.props.fetchUser(currentUserId)
        //     this.props.fetchTrack(trackId)
        //     })
        //     this.setState({ userLikesTrack: true })
        // }
        
        // deleteLike(e) {
        //     e.preventDefault()
        //     const track = this.state.track
        //     const currentLikeId = this.props.currentUser.likes[track.id].id
        //     this.props.deleteLike(currentLikeId, track).then(() => {

        //     this.props.fetchUser(this.props.currentUser.id)
        //     this.props.fetchTrack(track.id)
        // })
        //     this.setState({ userLikesTrack: false })
        // }
        // debugger
        // toggleLike() {
            
        //     if (!this.state.loggedIn) {
        //     return (
        //         <Link to="/login"> <faHeart /> <p>{this.dispNumLikes()}</p></Link>
        //     )
        //     }
        //     else {

        //     if (this.props.userLikesTrack) {
        //         return (
        //         <button 
        //         className='liked' 
        //         onClick={this.deleteLike}><AfterLikeButton /><p>{this.dispNumLikes()}</p></button>
        //         )
        //     }
        //     else {
        //         return (
        //         <button onClick={this.createLike}><faHeart /><p>{this.dispNumLikes()}</p></button>
        //         )
        //     }
        //     }
        // }
        // dispNumLikes(){
        //     const { track } = this.props
        //     if (!track) return
        //     if (!track.likes) return 'Like'
        //     else return (Object.keys(track.likes).length)
        // }
        render(){
            
            return(
            <div className="track-index-item">
                <img className="track-photos" src={this.props.track.photoUrl} />
                <span>
                    <Link to={`/tracks/${this.props.track.id }`} className="track-title">{this.props.track.title}</Link>
                </span>
                <br />

            </div> 
            ) 
        }
    }

export default TrackIndexItem