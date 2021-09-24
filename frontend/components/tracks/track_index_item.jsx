import React from 'react';
import { Link } from 'react-router-dom';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-h5-audio-player/lib/styles.css';


class TrackIndexItem extends React.Component 
    {
        constructor(props){
            super(props)

            this.state = {
                track: this.props.track,
                userLikesTrack: this.props.userLikesTrack,
                loggedIn: !!this.props.currentUser
                // arrowDisplay: true
            }

            this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
            // this.handleMouseEnter = this.handleMouseEnter.bind(this)
            // this.handleMouseLeave = this.handleMouseLeave.bind(this)
        }
        forceUpdateHandler(){
            this.forceUpdate();
        };
        

        // handleMouseEnter(){
        //     this.setState({
        //         arrowDisplay: true
        //     })
        // }

        // handleMouseLeave(){
        //     this.setState({
        //         arrowDisplay: false
        //     })
        // }

        render(){
            // let temp;
            // if (this.state.arrowDisplay === true){
            //     temp = "active-arrow-display"
            // } else {
            //     temp = "passive-arrow-display"
            // }
            // const playIcon = <FontAwesomeIcon icon={faPlay} />
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