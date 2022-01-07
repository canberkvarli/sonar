import React from 'react';

import PlayButtonContainer from '../play_button/play_button_container';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tracks: this.props.tracks,
            displayPlayhead: false
        }

    }

    componentDidMount(){
        this.props.fetchTracks();
    }
    
    componentWillUnmount(){
        this.props.currentTime? this.props.setCurrentProgress(this.props.currentTime) : null
    }

   

    render(){
        const {tracks} = this.props;    

        return(
            <div className="track-index-container" >
                <ul className="track-index">
                    {tracks.map((track,idx) => (
                      <li key={idx} className="track-obj">
                            <TrackIndexItem track={track} />
                        <div className="play-btn">
                            <PlayButtonContainer trackId={track.id} track={track} />
                        </div>
                      </li>  
                    ))}
                </ul>
            </div>
        )

    }
}


export default TrackIndex;