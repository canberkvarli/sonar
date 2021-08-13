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
x
    }


    render(){
        const {tracks} = this.props;    
        
        return(
            <div className="track-index-container" >
                <ul className="track-index">
                    {tracks.map((track,idx) => (
                      <li onClick={this.handleOnclick} >
                            <TrackIndexItem track={track} key={idx}  />
                      </li>  
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