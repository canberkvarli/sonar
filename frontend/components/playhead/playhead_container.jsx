import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchTrack, fetchTracks } from '../../actions/track_actions';
import { pauseTrack, playTrack, setCurrentTrack, setCurrentProgress } from '../../actions/playhead_actions';
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
    let currentLikeId;
    let currentUser;
    let userLikesTrack;


    if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.match.params.trackId]) {

        currentLikeId = currentUser.likes[ownProps.match.params.trackId].id
        userLikesTrack = true;

      } 
    }else {
      userLikesTrack = false;
      
    }
  } else {

    currentLikeId = null
    
  }
       
        return {

            currentUser: (state.session.id)? state.entities.users[state.session.id] : null, 
            trackId: ownProps.match.params.trackId,
            track: state.entities.tracks[ownProps.match.params.trackId],
            userLikesTrack: userLikesTrack,
            currentLikeId,
            currentTrack: state.playhead.currentTrack,
            // tracks: state.entities.tracks,
            paused: state.playhead.paused,
            currentUserLikes: currentUserLikes,


            // tracks: Object.values(state.entities.tracks),
            trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : '')

        }
    
}

const mDTP = dispatch => {

    return{
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        setCurrentTrack: (trackId) => dispatch(setCurrentTrack(trackId)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
    }
}


export default withRouter(connect(mSTP, mDTP)(Playhead));


