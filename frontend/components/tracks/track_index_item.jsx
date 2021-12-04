import React from 'react';
import { Link } from 'react-router-dom';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TrackIndexItem extends React.Component 
    {
        constructor(props){
            super(props)

            this.state = {
                track: this.props.track,
                userLikesTrack: this.props.userLikesTrack,
                loggedIn: !!this.props.currentUser
            }

            this.forceUpdateHandler = this.forceUpdateHandler.bind(this)

        }
        forceUpdateHandler(){
            this.forceUpdate();
        };
        

        render(){

            return(
            
            <div 
                className="track-index-item"
                // id={temp}
                >
                <div 
                    // onMouseEnter={this.handleMouseEnter} 
                    // onMouseLeave={this.handleMouseLeave} 
                     >
                {/* <div className="arrow">
                    {playIcon}
                </div> */}
                <Link onClick={this.forceUpdateHandler}
                to={`/tracks/${this.props.track.id }`}
                >
                    <img 
                    className="track-photos" src={this.props.track.photoUrl} /></Link>
                </div>
                <span>
                    <Link  onClick={this.forceUpdateHandler} 
                    to={`/tracks/${this.props.track.id }`} className="track-title">{this.props.track.title}</Link>
                </span>
                <br />
            </div> 
            ) 
        }
    }

export default TrackIndexItem