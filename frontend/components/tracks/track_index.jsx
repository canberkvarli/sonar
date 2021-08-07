import React from 'react';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchTracks();
    }


    render(){
        const {tracks} = this.props;        
        return(
            <div>
                <ul>
                    {tracks.map((track) => (
                            <TrackIndexItem track={track} key={idx}/>
                    ))}
                </ul>
            </div>
        )

    }
}


export default TrackIndex;