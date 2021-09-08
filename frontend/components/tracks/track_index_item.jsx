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

    
        }

       
        render(){
            
            return(
            <div className="track-index-item">
                <Link to={`/tracks/${this.props.track.id }`}><img className="track-photos" src={this.props.track.photoUrl} /></Link>
                <span>
                    <Link to={`/tracks/${this.props.track.id }`} className="track-title">{this.props.track.title}</Link>
                </span>
                <br />

            </div> 
            ) 
        }
    }

export default TrackIndexItem