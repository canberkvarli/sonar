import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import Playhead from './playhead';



const mSTP = (state, ownProps) => {
    const trackLoaded = () => {
            if (state.entities.tracks[ownProps.match.params.trackId]) {
                return true;
            } else {
                return false
            }
        }
        
        return {

            currentUser: state.entities.users[state.session.id],
            // trackId: ownProps.match.params.trackId,
            // track: state.entities.tracks[ownProps.match.params.trackId],
            // trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : ''),
            tracks: Object.values(state.entities.tracks),
        }
    
}

const mDTP = dispatch => ({
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
})


export default connect(mSTP, mDTP)(Playhead);


