import { connect } from "react-redux";
import { fetchTrack, fetchTracks } from "../../actions/track_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router";

import TrackShow from "./track_show";

const mSTP = (state, ownProps) => {
    const trackLoaded = () => {
        if (state.entities.tracks[ownProps.match.params.trackId]) {
            return true;
        } else {
            return false
        }
    }
    
    let currentUser;
    let currentLikeId;
    let userLikesTrack;


    if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.trackId]) {
        userLikesTrack = true;
        currentLikeId = currentUser.likes[ownProps.match.params.trackId].id;
      } else {
        userLikesTrack = false;
      }
    }
  }
    
    return {

        currentUser: state.entities.users[state.session.id],
        trackId: ownProps.match.params.trackId,
        track: state.entities.tracks[ownProps.match.params.trackId],
        trackUrl: (trackLoaded() ? state.entities.tracks[ownProps.match.params.trackId].trackUrl : ''),
        tracks: Object.values(state.entities.tracks),
        userLikesTrack: userLikesTrack,
        currentLikeId: currentLikeId,

        // currentLikeId: currentUser.likes[track.id].id
        // currentLikeId: currentUser.likes[ownProps.match.params.trackId].id

        // newTrack: state.tracks.map(track => track)
      }
    
}


const mDTP = dispatch => {
    return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track)),
    createLike: (like, trackId) => dispatch(createLike(like, trackId)),
    deleteLike: (likeId, trackId) => dispatch(deleteLike(likeId, trackId))
    }

}

export default withRouter(connect(mSTP, mDTP)(TrackShow));
