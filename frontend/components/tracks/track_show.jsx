import React from 'react';


class TrackShow extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchTrack(this.props.trackId)
    }

    render(){

        const {track, currentUser} = this.props;

        if ((track === undefined)){
            return null
        }else if (currentUser){
            return (
                <> 
                    <div className="playhead">
                        
                        hello
                    </div>
                </>
            )
        }

        
    }
}


export default TrackShow