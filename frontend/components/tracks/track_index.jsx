import React from 'react';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchTracks;
    }


    render(){
        const {tracks} = this.props.tracks;
        debugger
        return(
            <div>
                {tracks.map(track, idx => {
                    <TrackIndexItem track={track} key={idx}/>
                })}
            </div>
        )

    }
}


export default TrackIndex;