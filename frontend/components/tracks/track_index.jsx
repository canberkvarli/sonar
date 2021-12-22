import React from 'react';

import { Link } from 'react-router-dom';
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


    render(){
        const {tracks} = this.props;    

        return(
            <div className="track-index-container" >
                <ul className="track-index">
                    {tracks.map((track,idx) => (
                      <li key={idx}>
                            <TrackIndexItem track={track} />
                      </li>  
                    ))}
                </ul>
            </div>
        )

    }
}


export default TrackIndex;