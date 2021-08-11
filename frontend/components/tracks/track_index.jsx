import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';


class TrackIndex extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            displayPlayhead: false
        }

        console.log(props);
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
            <div>
                <ul className="track-index" onClick={this.handleOnClick}>
                    {tracks.map((track,idx) => (
                            <TrackIndexItem track={track} key={idx}  />
                    ))}
                    {this.state.displayPlayhead ? 
                    <Playhead />
                    :
                    null    
                }
                </ul>
            </div>
        )

    }
}


export default TrackIndex;