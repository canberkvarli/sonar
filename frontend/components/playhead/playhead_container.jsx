import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrack, fetchTracks } from '../../actions/track_actions';
import { pauseTrack, playTrack } from '../../actions/playhead_actions';
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

    let currentUserLikes = false;
        if (state.session.id) {

            if (state.entities.users[state.session.id].likes && state.playhead.currentSong) {
            if (state.entities.users[state.session.id].likes[state.playhead.currentSong.id]) {
                currentUserLikes = true;
            }
            }
        }

        console.log(state)
        return {

            currentUser: (state.session.id)? state.entities.users[state.session.id] : null, 
            currentTrack: state.playhead.currentTrack,
            trackId: ownProps.match.params.trackId,
            tracks: state.entities.tracks,
            track: state.entities.tracks[ownProps.match.params.trackId], 
            paused: state.playhead.paused,
            currentUserLikes: currentUserLikes,


            // tracks: Object.values(state.entities.tracks),
            trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : '')

        }
    
}

const mDTP = dispatch => {

    return{
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
    }
}


export default withRouter(connect(mSTP, mDTP)(Playhead));


