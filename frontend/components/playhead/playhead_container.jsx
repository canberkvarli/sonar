import { connect } from 'react-redux';
import { fetchTrack, fetchTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router';

import Playhead from './playhead';



const mSTP = (state, ownProps) => {
    const trackLoaded = () => {
            if (state.entities.tracks[ownProps.match.params.trackId]) {
                return true;
            } else {
                return false
            }
        }

        console.log(state)
        return {

            currentUser: (state.session.id)? state.entities.users[state.session.id] : null, 
            trackId: ownProps.match.params.trackId,
            tracks: state.entities.tracks,
            track: state.entities.tracks[ownProps.match.params.trackId], 
            // tracks: Object.values(state.entities.tracks),
            trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : '')

        }
    
}

const mDTP = dispatch => {

    return{
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
    }
}


export default withRouter(connect(mSTP, mDTP)(Playhead));


