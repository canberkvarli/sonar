import { connect } from "react-redux";
import { fetchTrack } from "../../actions/track_actions";
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
    let userLikesTrack = false;


    if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.trackId]) {
        userLikesTrack = true;
        currentLikeId = currentUser.likes[ownProps.trackId].id
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
        userLikesTrack
    }
    
}


const mDTP = dispatch => {
    return {
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: () => dispatch(fetchUser(userId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    uploadTrack: (track) => dispatch(uploadTrack(track)),
    createLike: (like, trackId) => dispatch(createLike(like)),
    deleteLike: (likeId, track) => dispatch(deleteLike(likeId, track))
    }

}

export default connect(mSTP, mDTP)(TrackShow)
