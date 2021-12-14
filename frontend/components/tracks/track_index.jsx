import React from 'react';

import { Link } from 'react-router-dom';
import Playhead from '../playhead/playhead';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tracks: this.props.tracks,
            displayPlayhead: false
        }

        this.handleOnclick = this.handleOnclick.bind(this);
    }

    componentDidMount(){
        this.props.fetchTracks();
    }

    handleOnclick(e){
        e.preventDefault(); 
        this.setState({
            displayPlayhead: true
        })
    }


    render(){
        const {tracks} = this.props;    

        return(
            <div className="track-index-container" >
                <ul className="track-index">
                    {tracks.map((track,idx) => (
                      <li key={idx} onClick={this.handleOnclick} >
                            <TrackIndexItem track={track} />
                      </li>  
                    ))}
                </ul>
            </div>
        )

    }
}


export default TrackIndex;