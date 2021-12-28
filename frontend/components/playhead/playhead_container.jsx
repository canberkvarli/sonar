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
    // console.log(ownProps.match)
        return {

            currentUser: (state.session.id)? state.entities.users[state.session.id] : null, 
            tracks: Object.values(state.entities.tracks),
            trackId: ownProps.match.params.trackId,
            track: state.entities.tracks[ownProps.match.params.trackId],
            userLikesTrack: userLikesTrack,
            currentLikeId,
            currentTrack: state.playhead.currentTrack,
            paused: state.playhead.paused,
            currentUserLikes: currentUserLikes,
            currentTime: state.playhead.currentTime,
            trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : '')

        }
    
}

const mDTP = dispatch => {

    return{
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
        setCurrentProgress: (progress) => dispatch(setCurrentProgress(progress)),
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
    }
}


export default withRouter(connect(mSTP, mDTP)(Playhead));


