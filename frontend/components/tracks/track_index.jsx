import React from 'react';

import { Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component{
    constructor(props){
        super(props)

        this.state = {
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
        // const mySet = new Set();
        // tracks.map(track => {
        //     mySet.add(track)
        //     newSet = Array.from(mySet);
        //     return newSet;
        // })
        return(
            <div className="track-index-container" >
                <ul className="track-index">
                    {tracks.map((track,idx) => (
                      <li key={idx} onClick={this.handleOnclick} >
                            <TrackIndexItem track={track} />
                      </li>  
                    ))}
                    {/* {this.state.displayPlayhead ? 
                    <Playhead />
                    :
                    null    
                } */}
                </ul>
            </div>
        )

    }
}


export default TrackIndex;